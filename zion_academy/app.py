from flask import Flask, render_template, jsonify, request, session, redirect, url_for, flash
import os
from functools import wraps

# Import db instance from models.py FIRST
from models import db
# Now that db is initialized with app, import all the models that use this db instance (ensure User, Course, Enrollment, Certificate are here)
from models import User, Category, Course, Lesson, Quiz, Question, Enrollment, Certificate, LessonCompletion
from seed_db import seed_data # Assuming seed_db.py is in the same directory
from forms import RegistrationForm, LoginForm # Make sure forms.py is in zion_academy directory

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

@app.route('/course/<int:course_id>/lesson/<int:lesson_id>')
def lesson_detail(course_id, lesson_id):
    lesson = None
    try:
        with app.app_context():
            # Query for the lesson by ID, ensuring it belongs to the correct course
            # Eager load the course for context (e.g., breadcrumbs, navigation)
            lesson = Lesson.query.options(db.joinedload(Lesson.course))                .filter_by(id=lesson_id, course_id=course_id)                .first_or_404() # Automatically returns 404 if not found
    except Exception as e:
        # This might be redundant if first_or_404 handles it, but good for other errors
        print(f"Error fetching lesson {lesson_id} for course {course_id}: {e}")
        return render_template('404.html', title="Error"), 404

    return render_template('lesson_detail.html', title=f"Lesson: {lesson.title}", lesson=lesson, course=lesson.course)

@app.route('/api/summarize_lesson', methods=['POST'])
def api_summarize_lesson():
    # In a real application:
    # 1. Get lesson_id or content from the request (e.g., request.json['lesson_id'])
    # 2. Fetch lesson content from the database
    # 3. Prepare a prompt for the AI (e.g., "Summarize the following text: [lesson_content]")
    # 4. Call the AI model API
    # 5. Return the AI's summary

    # For now, simulate AI processing and return a placeholder JSON response
    # You might receive data like: data = request.get_json(); lesson_title = data.get('lesson_title', 'the lesson')
    # For simplicity, the JS doesn't send data yet, so we'll use a generic title.

    # Simulate a delay, as AI processing takes time
    import time
    time.sleep(1) # Simulate network and processing delay

    # Placeholder summary
    summary_text = "This is a placeholder summary generated by the backend. In a real system, an AI would provide a concise overview of the lesson's key points here."

    return jsonify({
        "summary_title": "AI Generated Summary (from Backend)",
        "summary_content": summary_text,
        "status": "success"
    })

@app.route('/register', methods=['GET', 'POST'])
def register():
    if session.get('user_id'): # If already logged in, redirect to home or dashboard
        return redirect(url_for('index'))
    form = RegistrationForm()
    if form.validate_on_submit():
        try:
            user = User(username=form.username.data, email=form.email.data)
            user.set_password(form.password.data)
            db.session.add(user)
            db.session.commit()
            flash('Your account has been created! You are now able to log in.', 'success')
            return redirect(url_for('login'))
        except Exception as e:
            db.session.rollback()
            flash(f'Error creating account: {e}', 'danger')
    return render_template('register.html', title='Register', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if session.get('user_id'): # If already logged in
        return redirect(url_for('index'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and user.check_password(form.password.data):
            session['user_id'] = user.id
            session['username'] = user.username
            # session.permanent = form.remember.data # For "Remember Me" functionality
            flash('You have been logged in!', 'success')
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('index'))
        else:
            flash('Login Unsuccessful. Please check email and password.', 'danger')
    return render_template('login.html', title='Login', form=form)

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    session.pop('username', None)
    flash('You have been logged out.', 'info')
    return redirect(url_for('index'))

# Optional: Add a context processor to make current_user available in all templates
@app.context_processor
def inject_user():
    user_id = session.get('user_id')
    if user_id:
        user = User.query.get(user_id)
        return dict(current_user=user)
    return dict(current_user=None)

# Decorator for routes that require login
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            flash('Please log in to access this page.', 'info')
            return redirect(url_for('login', next=request.url))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/dashboard')
@login_required # Protect this route
def dashboard():
    user_id = session.get('user_id')
    # current_user is available via context_processor, but fetching again or using it directly is fine
    user = User.query.get_or_404(user_id)

    # Placeholder for progress data
    # In a real app, query Enrollments and LessonCompletions
    enrolled_courses_count = Enrollment.query.filter_by(user_id=user.id).count()
    completed_lessons_count = 0 # Replace with actual query later

    # Example: Get titles of enrolled courses
    enrolled_courses_details = db.session.query(Course.title, Enrollment.progress)                                .join(Enrollment, Course.id == Enrollment.course_id)                                .filter(Enrollment.user_id == user.id)                                .all()

    progress_data = {
        "enrolled_courses": enrolled_courses_count,
        "lessons_completed": completed_lessons_count, # Placeholder
        "certificates_earned": Certificate.query.filter_by(user_id=user.id).count(),
        "courses_details": enrolled_courses_details # List of (title, progress)
    }

    return render_template('dashboard.html', title='My Dashboard', user=user, progress_data=progress_data)

if __name__ == '__main__':
    app.run(debug=True)
