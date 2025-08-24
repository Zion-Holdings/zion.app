from flask import Flask, render_template, request, jsonify, session, redirect, url_for
import os
from datetime import datetime

# Import db instance from models.py FIRST
from models import db
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
from models import User, Category, Course, Lesson, Quiz, Question, Enrollment, Certificate, LessonCompletion, Update, UpdateReaction, UpdateComment

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

@app.cli.command('seed-updates')
def seed_updates_command():
    """Seeds the database with sample updates."""
    try:
        from seed_updates import seed_updates
        seed_updates()
        print('Update seeding completed successfully!')
    except ImportError:
        print('Error: Could not import seed_updates module.')
        print('Make sure seed_updates.py exists in the same directory.')
    except Exception as e:
        print(f'Error seeding updates: {e}')

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

# ----- Updates System Routes -----

@app.route('/updates')
def updates_list():
    """Display all updates with preview snippets and engagement features."""
    # For demo purposes, we'll use a default user_id of 1
    # In a real app, this would come from session/authentication
    user_id = session.get('user_id', 1)
    
    with app.app_context():
        # Get user's last visit time
        user = User.query.get(user_id)
        last_visit = user.last_visit if user else datetime.min
        
        # Get all published updates
        updates = Update.query.filter_by(is_published=True).order_by(Update.created_at.desc()).all()
        
        # Mark updates as new since last visit
        for update in updates:
            update.is_new = update.created_at > last_visit
        
        # Update user's last visit time
        if user:
            user.last_visit = datetime.utcnow()
            db.session.commit()
    
    return render_template('updates_list.html', title='Latest Updates', updates=updates, user_id=user_id)

@app.route('/updates/<int:update_id>')
def update_detail(update_id):
    """Display individual update with full content and engagement features."""
    user_id = session.get('user_id', 1)
    
    with app.app_context():
        update = Update.query.get_or_404(update_id)
        if not update.is_published:
            return render_template('404.html', title='Update Not Found'), 404
        
        # Get reactions and comments
        reactions = update.reactions.all()
        comments = update.comments.order_by(UpdateComment.created_at.desc()).all()
        
        # Group reactions by type
        reaction_counts = {
            'useful': update.get_reaction_count('useful'),
            'informative': update.get_reaction_count('informative'),
            'urgent': update.get_reaction_count('urgent')
        }
        
        # Check if current user has reacted
        user_reactions = {}
        if user_id:
            user_reactions = {r.reaction_type: True for r in update.reactions.filter_by(user_id=user_id).all()}
    
    return render_template('update_detail.html', 
                         title=update.title, 
                         update=update, 
                         reactions=reactions,
                         reaction_counts=reaction_counts,
                         user_reactions=user_reactions,
                         comments=comments,
                         user_id=user_id)

@app.route('/api/updates/<int:update_id>/react', methods=['POST'])
def api_react_to_update(update_id):
    """Add or remove a reaction to an update."""
    data = request.get_json() or {}
    user_id = data.get('user_id', 1)  # Default for demo
    reaction_type = data.get('reaction_type')
    
    if not reaction_type or reaction_type not in ['useful', 'informative', 'urgent']:
        return jsonify({'error': 'Invalid reaction type'}), 400
    
    with app.app_context():
        # Check if reaction already exists
        existing_reaction = UpdateReaction.query.filter_by(
            user_id=user_id, 
            update_id=update_id, 
            reaction_type=reaction_type
        ).first()
        
        if existing_reaction:
            # Remove reaction (toggle off)
            db.session.delete(existing_reaction)
            action = 'removed'
        else:
            # Add reaction
            new_reaction = UpdateReaction(
                user_id=user_id,
                update_id=update_id,
                reaction_type=reaction_type
            )
            db.session.add(new_reaction)
            action = 'added'
        
        db.session.commit()
        
        # Get updated counts
        update = Update.query.get(update_id)
        reaction_counts = {
            'useful': update.get_reaction_count('useful'),
            'informative': update.get_reaction_count('informative'),
            'urgent': update.get_reaction_count('urgent')
        }
    
    return jsonify({
        'action': action,
        'reaction_type': reaction_type,
        'reaction_counts': reaction_counts
    })

@app.route('/api/updates/<int:update_id>/comment', methods=['POST'])
def api_comment_on_update(update_id):
    """Add a comment to an update."""
    data = request.get_json() or {}
    user_id = data.get('user_id', 1)  # Default for demo
    content = data.get('content', '').strip()
    
    if not content:
        return jsonify({'error': 'Comment content is required'}), 400
    
    with app.app_context():
        # Verify update exists and is published
        update = Update.query.get(update_id)
        if not update or not update.is_published:
            return jsonify({'error': 'Update not found'}), 404
        
        # Create comment
        comment = UpdateComment(
            user_id=user_id,
            update_id=update_id,
            content=content
        )
        db.session.add(comment)
        db.session.commit()
        
        # Get user info for the response
        user = User.query.get(user_id)
        username = user.username if user else f'User {user_id}'
    
    return jsonify({
        'comment_id': comment.id,
        'content': comment.content,
        'username': username,
        'created_at': comment.created_at.isoformat()
    })

# ----- Admin Routes -----

@app.route('/admin/updates')
def admin_updates():
    """Admin interface for managing updates."""
    with app.app_context():
        updates = Update.query.order_by(Update.created_at.desc()).all()
    return render_template('admin_updates.html', title='Manage Updates', updates=updates)

@app.route('/admin/updates/new', methods=['GET', 'POST'])
def admin_create_update():
    """Create a new update."""
    if request.method == 'POST':
        title = request.form.get('title', '').strip()
        content = request.form.get('content', '').strip()
        summary = request.form.get('summary', '').strip()
        update_type = request.form.get('update_type', 'general')
        priority = request.form.get('priority', 'normal')
        is_published = request.form.get('is_published') == 'on'
        
        if not title or not content:
            return render_template('admin_create_update.html', 
                                title='Create Update',
                                error='Title and content are required',
                                form_data=request.form)
        
        with app.app_context():
            update = Update(
                title=title,
                content=content,
                summary=summary,
                update_type=update_type,
                priority=priority,
                is_published=is_published
            )
            db.session.add(update)
            db.session.commit()
            
            return redirect(url_for('admin_updates'))
    
    return render_template('admin_create_update.html', title='Create Update')

@app.route('/admin/updates/<int:update_id>/edit', methods=['GET', 'POST'])
def admin_edit_update(update_id):
    """Edit an existing update."""
    with app.app_context():
        update = Update.query.get_or_404(update_id)
        
        if request.method == 'POST':
            title = request.form.get('title', '').strip()
            content = request.form.get('content', '').strip()
            summary = request.form.get('summary', '').strip()
            update_type = request.form.get('update_type', 'general')
            priority = request.form.get('priority', 'normal')
            is_published = request.form.get('is_published') == 'on'
            
            if not title or not content:
                return render_template('admin_edit_update.html', 
                                    title='Edit Update',
                                    update=update,
                                    error='Title and content are required')
            
            update.title = title
            update.content = content
            update.summary = summary
            update.update_type = update_type
            update.priority = priority
            update.is_published = is_published
            update.updated_at = datetime.utcnow()
            
            db.session.commit()
            return redirect(url_for('admin_updates'))
        
        return render_template('admin_edit_update.html', title='Edit Update', update=update)

@app.route('/admin/updates/<int:update_id>/delete', methods=['POST'])
def admin_delete_update(update_id):
    """Delete an update."""
    with app.app_context():
        update = Update.query.get_or_404(update_id)
        db.session.delete(update)
        db.session.commit()
    
    return redirect(url_for('admin_updates'))

if __name__ == '__main__':
    app.run(debug=True)
