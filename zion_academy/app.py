from flask import Flask, render_template, request, jsonify
import os
import uuid
from datetime import datetime, date
from sqlalchemy import func, desc

# Import db instance from models.py FIRST
from models import db, AnalyticsEvent, FeedbackSubmission, ContentAnalytics
from seed_db import seed_data # Assuming seed_db.py is in the same directory

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
instance_folder = os.path.join(basedir, 'instance')
os.makedirs(instance_folder, exist_ok=True)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(instance_folder, 'academy.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'dev_secret_key' # IMPORTANT: Change this for production!

# Initialize db with the app AFTER app is configured
db.init_app(app)

# Now that db is initialized with app, import all the models that use this db instance
from models import User, Category, Course, Lesson, Quiz, Question, Enrollment, Certificate, LessonCompletion

@app.cli.command('init-db')
def init_db_command():
    """Creates the database tables."""
    with app.app_context(): # Operations on db require app context
        db.create_all()
    print('Initialized the database and created tables.')

@app.route('/')
@app.route('/academy')
@app.route('/learn')
def index():
    return render_template('index.html', title='Welcome to Zion Academy')

@app.route('/academy/founder-course')
@app.route('/learn/launch')
def founder_course():
    """Display the founder onboarding course."""
    with app.app_context():
        course = Course.query.filter_by(title='Zion Founder Launch Course').first()
    if course:
        return render_template('course_detail.html', title=course.title, course=course)
    return render_template('404.html', title='Course Not Found'), 404

@app.route('/courses')
def course_list():
    courses_data = []
    try:
        # Ensure app context for DB operations, especially if called outside a request context sometimes
        with app.app_context():
            courses_data = Course.query.all()
    except Exception as e:
        # This error is common if 'flask init-db' hasn't been run yet
        print(f"Error fetching courses: {e}. Run 'flask init-db' if you haven\'t already.") # Escaped apostrophe
    return render_template('course_list.html', title='Our Courses', courses=courses_data)

@app.cli.command('seed-db')
def seed_db_command():
    """Seeds the database with initial sample data."""
    seed_data()
    # No need to print here, seed_data() already prints messages.
    print('Database seeding process initiated from CLI command.')

@app.route('/course/<int:course_id>')
def course_detail(course_id):
    course = None
    try:
        with app.app_context():
            # Query for the course by ID, and also eagerly load its lessons
            # and category to avoid separate queries in the template.
            course = Course.query.options(db.joinedload(Course.lessons), db.joinedload(Course.category)).get(course_id)
    except Exception as e:
        print(f"Error fetching course {course_id}: {e}")

    if course:
        return render_template('course_detail.html', title=course.title, course=course)
    else:
        # Handle course not found, maybe redirect to course list or show a 404 page
        # For now, redirecting to course list with a flashed message (if flash is set up)
        # or just rendering a simple not found message.
        return render_template('404.html', title="Course Not Found"), 404 # Assuming you have a 404.html


# ----- Progress Tracking Endpoints -----

@app.route('/api/enroll', methods=['POST'])
def api_enroll():
    """Enroll a user in a course if not already enrolled."""
    data = request.get_json() or {}
    user_id = data.get('user_id')
    course_id = data.get('course_id')
    if not user_id or not course_id:
        return jsonify({'error': 'Missing user_id or course_id'}), 400

    with app.app_context():
        enrollment = Enrollment.query.filter_by(user_id=user_id, course_id=course_id).first()
        if not enrollment:
            enrollment = Enrollment(user_id=user_id, course_id=course_id, progress=0)
            db.session.add(enrollment)
            db.session.commit()

    return jsonify({'message': 'enrolled'}), 201


@app.route('/api/complete', methods=['POST'])
def api_complete_lesson():
    """Mark a lesson as completed and update progress."""
    data = request.get_json() or {}
    user_id = data.get('user_id')
    course_id = data.get('course_id')
    lesson_id = data.get('lesson_id')
    if not user_id or not course_id or not lesson_id:
        return jsonify({'error': 'Missing identifiers'}), 400

    with app.app_context():
        enrollment = Enrollment.query.filter_by(user_id=user_id, course_id=course_id).first()
        if not enrollment:
            return jsonify({'error': 'Enrollment not found'}), 404

        completion = LessonCompletion.query.filter_by(
            enrollment_user_id=user_id,
            enrollment_course_id=course_id,
            lesson_id=lesson_id,
        ).first()
        if not completion:
            completion = LessonCompletion(
                enrollment_user_id=user_id,
                enrollment_course_id=course_id,
                lesson_id=lesson_id,
            )
            db.session.add(completion)

        total_lessons = Lesson.query.filter_by(course_id=course_id).count()
        completed = LessonCompletion.query.filter_by(
            enrollment_user_id=user_id,
            enrollment_course_id=course_id,
        ).count()
        enrollment.progress = int((completed / total_lessons) * 100) if total_lessons else 0

        if enrollment.progress == 100:
            existing = Certificate.query.filter_by(user_id=user_id, course_id=course_id).first()
            if not existing:
                cert = Certificate(
                    user_id=user_id,
                    course_id=course_id,
                    certificate_url=f"/certificates/{user_id}_{course_id}.pdf",
                )
                db.session.add(cert)

        db.session.commit()

    return jsonify({'progress': enrollment.progress})


@app.route('/api/progress/<int:user_id>')
def api_user_progress(user_id):
    """Return progress and achievements for a user."""
    with app.app_context():
        enrollments = Enrollment.query.filter_by(user_id=user_id).all()
        progress_data = []
        for e in enrollments:
            course = Course.query.get(e.course_id)
            progress_data.append({
                'course_id': e.course_id,
                'course_title': course.title if course else '',
                'progress': e.progress,
                'completed': e.progress == 100,
            })

        certificates = Certificate.query.filter_by(user_id=user_id).all()
        achievements = [
            {
                'course_id': c.course_id,
                'certificate_url': c.certificate_url,
            }
            for c in certificates
        ]

    return jsonify({'enrollments': progress_data, 'achievements': achievements})


@app.route('/api/generate-quiz', methods=['POST'])
def api_generate_quiz():
    """Return a simple quiz for a topic."""
    data = request.get_json() or {}
    topic = data.get('topic', 'Zion OS')
    quiz = [
        {
            'question': f'What is the primary goal of {topic}?',
            'options': ['AI, Talent, Trust mission', 'Other'],
        },
        {
            'question': 'Which token powers governance in Zion?',
            'options': ['ZION$', 'BTC'],
        },
    ]
    return jsonify({'quiz': quiz})


@app.route('/api/summarize', methods=['POST'])
def api_summarize():
    """Return a basic summary of provided text."""
    data = request.get_json() or {}
    text = data.get('text', '')
    summary = '.'.join(text.split('.')[:2]).strip()
    return jsonify({'summary': summary})


# ----- Analytics Endpoints -----

@app.route('/api/analytics/track', methods=['POST'])
def api_track_event():
    """Track user analytics events"""
    data = request.get_json() or {}
    
    # Generate session ID if not provided
    session_id = data.get('session_id') or str(uuid.uuid4())
    
    # Create analytics event
    event = AnalyticsEvent(
        user_id=data.get('user_id'),
        session_id=session_id,
        event_type=data.get('event_type'),
        event_data=data.get('event_data'),
        course_id=data.get('course_id'),
        lesson_id=data.get('lesson_id'),
        user_agent=request.headers.get('User-Agent'),
        ip_address=request.remote_addr,
        referrer=request.headers.get('Referer')
    )
    
    with app.app_context():
        db.session.add(event)
        db.session.commit()
    
    return jsonify({
        'success': True,
        'session_id': session_id,
        'event_id': event.id
    })


@app.route('/api/analytics/content/<content_type>/<int:content_id>')
def api_content_analytics(content_type, content_id):
    """Get analytics for specific content"""
    with app.app_context():
        # Get aggregated analytics
        analytics = ContentAnalytics.query.filter_by(
            content_type=content_type,
            content_id=content_id
        ).order_by(desc(ContentAnalytics.date)).limit(30).all()
        
        # Get recent events
        events = AnalyticsEvent.query.filter_by(
            course_id=content_id if content_type == 'course' else None,
            lesson_id=content_id if content_type == 'lesson' else None
        ).order_by(desc(AnalyticsEvent.timestamp)).limit(100).all()
        
        # Calculate current metrics
        current_metrics = {
            'total_views': sum(a.views for a in analytics),
            'total_clicks': sum(a.clicks for a in analytics),
            'avg_completion_rate': sum(a.completion_rate for a in analytics) / len(analytics) if analytics else 0,
            'total_feedback': sum(a.feedback_count for a in analytics)
        }
        
        return jsonify({
            'content_type': content_type,
            'content_id': content_id,
            'current_metrics': current_metrics,
            'daily_analytics': [{
                'date': a.date.isoformat(),
                'views': a.views,
                'clicks': a.clicks,
                'completion_rate': a.completion_rate,
                'time_spent': a.time_spent_seconds
            } for a in analytics],
            'recent_events': [{
                'event_type': e.event_type,
                'timestamp': e.timestamp.isoformat(),
                'user_id': e.user_id,
                'event_data': e.event_data
            } for e in events]
        })


@app.route('/api/analytics/dashboard')
def api_analytics_dashboard():
    """Get overall analytics dashboard data"""
    with app.app_context():
        # Get top performing content
        top_courses = db.session.query(
            Course.id,
            Course.title,
            func.count(AnalyticsEvent.id).label('total_views')
        ).join(AnalyticsEvent, Course.id == AnalyticsEvent.course_id)\
         .filter(AnalyticsEvent.event_type == 'view')\
         .group_by(Course.id)\
         .order_by(desc('total_views'))\
         .limit(10).all()
        
        top_lessons = db.session.query(
            Lesson.id,
            Lesson.title,
            Course.title.label('course_title'),
            func.count(AnalyticsEvent.id).label('total_views')
        ).join(AnalyticsEvent, Lesson.id == AnalyticsEvent.lesson_id)\
         .join(Course, Lesson.course_id == Course.id)\
         .filter(AnalyticsEvent.event_type == 'view')\
         .group_by(Lesson.id)\
         .order_by(desc('total_views'))\
         .limit(10).all()
        
        # Get feedback summary
        feedback_summary = db.session.query(
            FeedbackSubmission.feedback_type,
            func.count(FeedbackSubmission.id).label('count')
        ).group_by(FeedbackSubmission.feedback_type).all()
        
        return jsonify({
            'top_courses': [{
                'id': c.id,
                'title': c.title,
                'views': c.total_views
            } for c in top_courses],
            'top_lessons': [{
                'id': l.id,
                'title': l.title,
                'course_title': l.course_title,
                'views': l.total_views
            } for l in top_lessons],
            'feedback_summary': [{
                'type': f.feedback_type,
                'count': f.count
            } for f in feedback_summary]
        })


# ----- Feedback Endpoints -----

@app.route('/api/feedback/submit', methods=['POST'])
def api_submit_feedback():
    """Submit user feedback"""
    data = request.get_json() or {}
    
    feedback = FeedbackSubmission(
        user_id=data.get('user_id'),
        feedback_type=data.get('feedback_type'),
        content_type=data.get('content_type'),
        content_id=data.get('content_id'),
        title=data.get('title'),
        description=data.get('description'),
        priority=data.get('priority', 'medium')
    )
    
    with app.app_context():
        db.session.add(feedback)
        db.session.commit()
    
    return jsonify({
        'success': True,
        'feedback_id': feedback.id,
        'message': 'Feedback submitted successfully'
    })


@app.route('/api/feedback/list')
def api_feedback_list():
    """Get list of feedback submissions"""
    with app.app_context():
        feedbacks = FeedbackSubmission.query.order_by(desc(FeedbackSubmission.created_at)).all()
        
        return jsonify({
            'feedbacks': [{
                'id': f.id,
                'type': f.feedback_type,
                'content_type': f.content_type,
                'content_id': f.content_id,
                'title': f.title,
                'description': f.description,
                'priority': f.priority,
                'status': f.status,
                'created_at': f.created_at.isoformat(),
                'user_id': f.user_id
            } for f in feedbacks]
        })


@app.route('/api/feedback/<int:feedback_id>', methods=['PUT'])
def api_update_feedback(feedback_id):
    """Update feedback status (admin only)"""
    data = request.get_json() or {}
    
    with app.app_context():
        feedback = FeedbackSubmission.query.get(feedback_id)
        if not feedback:
            return jsonify({'error': 'Feedback not found'}), 404
        
        # Update fields
        if 'status' in data:
            feedback.status = data['status']
        if 'admin_response' in data:
            feedback.admin_response = data['admin_response']
        if 'priority' in data:
            feedback.priority = data['priority']
        
        if data.get('status') == 'resolved':
            feedback.resolved_at = datetime.utcnow()
        
        feedback.updated_at = datetime.utcnow()
        db.session.commit()
    
    return jsonify({
        'success': True,
        'message': 'Feedback updated successfully'
    })


# ----- Content Performance Tracking -----

@app.route('/api/analytics/update-content-metrics', methods=['POST'])
def api_update_content_metrics():
    """Update aggregated content metrics (called periodically)"""
    data = request.get_json() or {}
    content_type = data.get('content_type')
    content_id = data.get('content_id')
    
    if not content_type or not content_id:
        return jsonify({'error': 'Missing content_type or content_id'}), 400
    
    with app.app_context():
        today = date.today()
        
        # Get or create analytics record for today
        analytics = ContentAnalytics.query.filter_by(
            content_type=content_type,
            content_id=content_id,
            date=today
        ).first()
        
        if not analytics:
            analytics = ContentAnalytics(
                content_type=content_type,
                content_id=content_id,
                date=today
            )
            db.session.add(analytics)
        
        # Calculate metrics from events
        events = AnalyticsEvent.query.filter_by(
            course_id=content_id if content_type == 'course' else None,
            lesson_id=content_id if content_type == 'lesson' else None
        ).filter(
            func.date(AnalyticsEvent.timestamp) == today
        ).all()
        
        # Update metrics
        analytics.views = len([e for e in events if e.event_type == 'view'])
        analytics.clicks = len([e for e in events if e.event_type == 'click'])
        analytics.unique_views = len(set(e.session_id for e in events if e.event_type == 'view'))
        
        # Calculate time spent
        time_events = [e for e in events if e.event_type == 'time_spent' and e.event_data]
        total_time = sum(e.event_data.get('seconds', 0) for e in time_events)
        analytics.time_spent_seconds = total_time
        
        # Calculate completion rate (for lessons)
        if content_type == 'lesson':
            completions = len([e for e in events if e.event_type == 'completion'])
            analytics.completion_rate = (completions / analytics.views * 100) if analytics.views > 0 else 0
        
        # Update feedback count
        feedback_count = FeedbackSubmission.query.filter_by(
            content_type=content_type,
            content_id=content_id
        ).count()
        analytics.feedback_count = feedback_count
        
        db.session.commit()
    
    return jsonify({
        'success': True,
        'message': 'Content metrics updated successfully'
    })


# ----- Admin Dashboard -----

@app.route('/admin/dashboard')
def admin_dashboard():
    """Admin dashboard for analytics and feedback management"""
    return render_template('admin_dashboard.html', title='Admin Dashboard')


@app.route('/user/<int:user_id>')
def user_profile(user_id):
    """Display user profile with progress and achievements."""
    user = None
    with app.app_context():
        user = User.query.get(user_id)
        enrollments = Enrollment.query.filter_by(user_id=user_id).all()
        courses = {e.course_id: Course.query.get(e.course_id) for e in enrollments}
        certificates = Certificate.query.filter_by(user_id=user_id).all()

    return render_template(
        'user_profile.html',
        title=f'{user.username} Profile' if user else 'User Profile',
        user=user,
        enrollments=enrollments,
        courses=courses,
        certificates=certificates,
    )

if __name__ == '__main__':
    app.run(debug=True)
