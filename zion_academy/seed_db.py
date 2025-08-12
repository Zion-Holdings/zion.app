from app import app, db
from models import Category, Course, Lesson, Quiz, Question, User

def seed_data():
    with app.app_context():
        # Create Categories
        categories_data = [
            "AI Engineering", "Cloud & DevOps", "Marketplace Mastery", "Remote Work"
        ]
        categories = {}
        for cat_name in categories_data:
            category = Category.query.filter_by(name=cat_name).first()
            if not category:
                category = Category(name=cat_name)
                db.session.add(category)
            categories[cat_name] = category
        db.session.commit()
        print("Categories seeded.")

        # Create Courses
        courses_data = [
            {
                "title": "Introduction to Machine Learning",
                "description": "Learn the fundamentals of ML and build your first models.",
                "category": "AI Engineering",
                "is_premium_tier": False,
                "lessons": [
                    {"title": "What is Machine Learning?", "content_type": "text", "content_data": "ML is a field of AI...", "lesson_order": 1},
                    {"title": "Types of ML Algorithms", "content_type": "text", "content_data": "Supervised, Unsupervised, Reinforcement...", "lesson_order": 2},
                    {"title": "Setting up Your Python Environment", "content_type": "video", "content_data": "https://example.com/ml_setup_video", "lesson_order": 3},
                ]
            },
            {
                "title": "AWS Certified Cloud Practitioner",
                "description": "Prepare for the AWS CCP exam with this comprehensive course.",
                "category": "Cloud & DevOps",
                "is_premium_tier": True,
                "lessons": [
                    {"title": "Introduction to AWS", "content_type": "text", "content_data": "Overview of AWS services...", "lesson_order": 1},
                    {"title": "Core AWS Services: EC2, S3, VPC", "content_type": "video", "content_data": "https://example.com/aws_core_services", "lesson_order": 2},
                ]
            },
            {
                "title": "Building Your Online Store",
                "description": "A step-by-step guide to launching a successful e-commerce business.",
                "category": "Marketplace Mastery",
                "is_premium_tier": False,
                "lessons": [
                    {"title": "Choosing Your Niche", "content_type": "text", "content_data": "Find your profitable niche...", "lesson_order": 1},
                ]
            },
            {
                "title": "Zion Founder Launch Course",
                "description": "Interactive onboarding for launching your own Zion instance.",
                "category": "Marketplace Mastery",
                "is_premium_tier": False,
                "lessons": [
                    {"title": "Module 1 — Introduction to Zion", "content_type": "text", "content_data": "Overview of Zion OS, mission and multiverse vision.", "lesson_order": 1},
                    {"title": "Module 2 — Core Systems", "content_type": "text", "content_data": "Marketplace, ZionGPT, DAO governance, token economy, multiverse config.", "lesson_order": 2},
                    {"title": "Module 3 — Deployment", "content_type": "text", "content_data": "Genesis Deploy Kit and module enablement.", "lesson_order": 3},
                    {"title": "Module 4 — Community & Scaling", "content_type": "text", "content_data": "Nations, proposals, hiring and franchise strategy.", "lesson_order": 4},
                    {"title": "Module 5 — Legal & Launch", "content_type": "text", "content_data": "KYC/AML, token legal stack, whitepaper.", "lesson_order": 5},
                ]
            }
        ]

        for course_info in courses_data:
            course = Course.query.filter_by(title=course_info["title"]).first()
            if not course:
                category = categories[course_info["category"]]
                new_course = Course(
                    title=course_info["title"],
                    description=course_info["description"],
                    category_id=category.id,
                    is_premium_tier=course_info["is_premium_tier"]
                )
                db.session.add(new_course)
                db.session.commit()

                for lesson_info in course_info.get("lessons", []):
                    lesson = Lesson(
                        title=lesson_info["title"],
                        content_type=lesson_info["content_type"],
                        content_data=lesson_info["content_data"],
                        lesson_order=lesson_info["lesson_order"],
                        course_id=new_course.id
                    )
                    db.session.add(lesson)
                db.session.commit()
        print("Courses and lessons seeded.")

        ml_course = Course.query.filter_by(title="Introduction to Machine Learning").first()
        if ml_course:
            quiz1 = Quiz.query.filter_by(title="ML Fundamentals Quiz", course_id=ml_course.id).first()
            if not quiz1:
                quiz1 = Quiz(title="ML Fundamentals Quiz", course_id=ml_course.id, is_final_exam=False)
                db.session.add(quiz1)
                db.session.commit()

                questions_data = [
                    {"text": "What is supervised learning?", "options": [{"text":"Learning with a teacher", "is_correct": True}, {"text":"Learning alone", "is_correct": False}], "type": "multiple_choice"},
                    {"text": "Is Python a good language for ML?", "options": [{"text":"True", "is_correct": True}, {"text":"False", "is_correct": False}], "type": "true_false"},
                ]
                for q_data in questions_data:
                    question = Question(
                        quiz_id=quiz1.id,
                        text=q_data["text"],
                        question_type=q_data["type"],
                        options=q_data["options"]
                    )
                    db.session.add(question)
                db.session.commit()
                print(f"Quiz and questions for '{ml_course.title}' seeded.") # Escaped quote in f-string

        user = User.query.filter_by(username='testuser').first()
        if not user:
            # Note: In a real app, ensure password_hash is properly generated and hashed.
            user = User(username='testuser', email='test@example.com', password_hash='temphash')
            db.session.add(user)
            db.session.commit()
            print("Test user seeded.")

# The following is for context, not part of the script itself:
# To use this, you would typically add a Flask CLI command.
# For example, in app.py:
# from seed_db import seed_data
# @app.cli.command('seed-db')
# def seed_db_command():
#     seed_data()
#     print('Database seeded from CLI command.')
#
# And then run from your terminal: flask seed-db
# (After running flask init-db first if the database/tables don\'t exist)
