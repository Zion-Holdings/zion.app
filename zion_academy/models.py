from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))
    is_premium = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    profile_badge_url = db.Column(db.String(200), nullable=True)

    enrollments = db.relationship('Enrollment', back_populates='user', cascade="all, delete-orphan")
    certificates = db.relationship('Certificate', backref='user', lazy=True, cascade="all, delete-orphan")

    def __repr__(self):
        return f'<User {self.username}>'

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    courses = db.relationship('Course', backref='category', lazy=True)

    def __repr__(self):
        return f'<Category {self.name}>'

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text, nullable=True)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    is_premium_tier = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    lessons = db.relationship('Lesson', backref='course', lazy='dynamic', cascade="all, delete-orphan")
    quizzes = db.relationship('Quiz', backref='course', lazy='dynamic', cascade="all, delete-orphan")
    enrollments = db.relationship('Enrollment', back_populates='course', cascade="all, delete-orphan")
    certificates = db.relationship('Certificate', backref='course', lazy=True)

    def __repr__(self):
        return f'<Course {self.title}>'

class Lesson(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    content_type = db.Column(db.String(50), default='text') # e.g. 'video', 'text', 'exercise'
    content_data = db.Column(db.Text) # URL for video, markdown for text, JSON for exercise
    lesson_order = db.Column(db.Integer, nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    completions = db.relationship('LessonCompletion', backref='lesson', lazy='dynamic', cascade="all, delete-orphan")

    def __repr__(self):
        return f'<Lesson {self.title} - Course {self.course_id}>'

class Quiz(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)
    lesson_id = db.Column(db.Integer, db.ForeignKey('lesson.id'), nullable=True) # Optional: if quiz is for a specific lesson
    is_final_exam = db.Column(db.Boolean, default=False)

    questions = db.relationship('Question', backref='quiz', lazy='dynamic', cascade="all, delete-orphan")

    def __repr__(self):
        return f'<Quiz {self.title} - Course {self.course_id}>'

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quiz_id = db.Column(db.Integer, db.ForeignKey('quiz.id'), nullable=False)
    text = db.Column(db.Text, nullable=False)
    question_type = db.Column(db.String(50), default='multiple_choice') # e.g. 'multiple_choice', 'true_false'
    options = db.Column(db.JSON, nullable=True) # Store options as JSON: e.g. [{"text": "Option A", "is_correct": false}, ...]

    def __repr__(self):
        return f'<Question {self.id} for Quiz {self.quiz_id}>'

class Enrollment(db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), primary_key=True)
    enrolled_on = db.Column(db.DateTime, default=datetime.utcnow)
    progress = db.Column(db.Integer, default=0) # e.g. percentage or last completed lesson_id

    user = db.relationship("User", back_populates="enrollments")
    course = db.relationship("Course", back_populates="enrollments")
    lesson_completions = db.relationship('LessonCompletion', backref='enrollment', lazy='dynamic', cascade="all, delete-orphan")

    def __repr__(self):
        return f'<Enrollment User {self.user_id} in Course {self.course_id}>'

class LessonCompletion(db.Model):
    id = db.Column(db.Integer, primary_key=True) # Explicit PKey for LessonCompletion
    enrollment_user_id = db.Column(db.Integer, nullable=False)
    enrollment_course_id = db.Column(db.Integer, nullable=False)
    lesson_id = db.Column(db.Integer, db.ForeignKey('lesson.id'), nullable=False)
    completed_at = db.Column(db.DateTime, default=datetime.utcnow)

    __table_args__ = (
        db.ForeignKeyConstraint(
            ['enrollment_user_id', 'enrollment_course_id'],
            ['enrollment.user_id', 'enrollment.course_id']
        ),
    )
    # 'lesson' relationship is defined by backref from Lesson.completions
    # 'enrollment' relationship is defined by backref from Enrollment.lesson_completions

    def __repr__(self):
        return f'<LessonCompletion L{self.lesson_id} by U{self.enrollment_user_id} C{self.enrollment_course_id}>'

class Certificate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)
    issued_on = db.Column(db.DateTime, default=datetime.utcnow)
    certificate_url = db.Column(db.String(200), nullable=False) # Link to the generated PDF or an identifier

    # 'user' and 'course' relationships are established by backrefs from User and Course models.

    def __repr__(self):
        return f'<Certificate {self.id} for U{self.user_id} - C{self.course_id}>'
