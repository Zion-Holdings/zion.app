import unittest
import os
from app import app as main_app, db as main_db
from models import User, Course, Category, Lesson

class BaseTestCase(unittest.TestCase):
    def setUp(self):
        main_app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        main_app.config['TESTING'] = True
        main_app.config['WTF_CSRF_ENABLED'] = False
        main_app.config['SECRET_KEY'] = 'test_secret_key_for_testing'

        self.app = main_app
        self.client = self.app.test_client()
        self.db = main_db

        with self.app.app_context():
            self.db.create_all()
            self.seed_basic_data()

    def tearDown(self):
        with self.app.app_context():
            self.db.session.remove()
            self.db.drop_all()

    def seed_basic_data(self):
        with self.app.app_context():
            if Category.query.first() is None:
                cat1 = Category(name="Test Category 1")
                self.db.session.add(cat1)
                self.db.session.commit()

                course1 = Course(title="Test Course 1", description="Desc1", category_id=cat1.id)
                self.db.session.add(course1)
                self.db.session.commit()

                lesson1 = Lesson(title="Test Lesson 1", content_data="Content1", lesson_order=1, course_id=course1.id)
                self.db.session.add(lesson1)
                self.db.session.commit()

                test_user = User(username="initialuser", email="initial@example.com")
                test_user.set_password("initialpass")
                self.db.session.add(test_user)
                self.db.session.commit()

class TestAppRoutes(BaseTestCase):
    def test_home_page_loads(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Welcome to Zion Academy', response.data)

    def test_course_list_page_loads(self):
        response = self.client.get('/courses')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Our Courses', response.data)
        self.assertIn(b'Test Course 1', response.data)

    def test_course_detail_page_loads(self):
        course = Course.query.filter_by(title="Test Course 1").first()
        self.assertIsNotNone(course, "Test Course 1 should exist.")
        response = self.client.get(f'/course/{course.id}')
        self.assertEqual(response.status_code, 200)
        self.assertIn(bytes(course.title, 'utf-8'), response.data)
        self.assertIn(b'Test Lesson 1', response.data)

    def test_lesson_detail_page_loads(self):
        lesson = Lesson.query.filter_by(title="Test Lesson 1").first()
        self.assertIsNotNone(lesson, "Test Lesson 1 should exist.")
        response = self.client.get(f'/course/{lesson.course_id}/lesson/{lesson.id}')
        self.assertEqual(response.status_code, 200)
        self.assertIn(bytes(lesson.title, 'utf-8'), response.data)
        self.assertIn(bytes(lesson.content_data, 'utf-8'), response.data)

    def test_404_page_for_nonexistent_course(self):
        response = self.client.get('/course/99999')
        self.assertEqual(response.status_code, 404)
        self.assertIn(b'Course Not Found', response.data)

    def test_404_page_for_nonexistent_lesson(self):
        course = Course.query.filter_by(title="Test Course 1").first()
        self.assertIsNotNone(course)
        response = self.client.get(f'/course/{course.id}/lesson/99999')
        self.assertEqual(response.status_code, 404)

class TestUserModel(BaseTestCase):
    def test_password_hashing(self):
        u = User(username='pwdtestuser', email='pwdtest@example.com')
        u.set_password('mypassword')
        self.db.session.add(u) # Add to session to test retrieval if needed, or test standalone
        self.db.session.commit() # Commit to save it

        # Fetch the user again to ensure the hash is stored and retrieved correctly
        u_from_db = User.query.filter_by(username='pwdtestuser').first()
        self.assertIsNotNone(u_from_db)
        self.assertNotEqual(u_from_db.password_hash, 'mypassword')
        self.assertTrue(u_from_db.check_password('mypassword'))
        self.assertFalse(u_from_db.check_password('wrongpassword'))

class TestAuth(BaseTestCase):
    def _register_user(self, username="testuser", email="test@example.com", password="password123"):
        return self.client.post('/register', data=dict(
            username=username,
            email=email,
            password=password,
            confirm_password=password
        ), follow_redirects=True)

    def _login_user(self, email="test@example.com", password="password123"):
        return self.client.post('/login', data=dict(
            email=email,
            password=password
        ), follow_redirects=True)

    def _logout_user(self):
        return self.client.get('/logout', follow_redirects=True)

    def test_user_registration(self):
        response = self._register_user(username="newuser", email="new@example.com", password="newpassword")
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Your account has been created!', response.data)
        user = User.query.filter_by(email="new@example.com").first()
        self.assertIsNotNone(user)
        self.assertEqual(user.username, "newuser")

    def test_registration_duplicate_username(self):
        self._register_user(username="dupuser", email="dup1@example.com", password="password")
        response = self._register_user(username="dupuser", email="dup2@example.com", password="password")
        self.assertIn(b'That username is already taken', response.data)

    def test_registration_duplicate_email(self):
        self._register_user(username="user1", email="dupemail@example.com", password="password")
        response = self._register_user(username="user2", email="dupemail@example.com", password="password")
        self.assertIn(b'That email is already in use', response.data)

    def test_user_login_logout(self):
        self._register_user(username="loginuser", email="login@example.com", password="logmein")

        response_login = self._login_user(email="login@example.com", password="logmein")
        self.assertEqual(response_login.status_code, 200)
        self.assertIn(b'You have been logged in!', response_login.data)
        self.assertIn(b'Hi, loginuser!', response_login.data)

        response_logout = self._logout_user()
        self.assertEqual(response_logout.status_code, 200)
        self.assertIn(b'You have been logged out.', response_logout.data)
        self.assertNotIn(b'Hi, loginuser!', response_logout.data)

    def test_login_wrong_credentials(self):
        self._register_user(email="wrong@example.com", password="correctpassword")
        response = self._login_user(email="wrong@example.com", password="incorrectpassword")
        self.assertIn(b'Login Unsuccessful', response.data)

    def test_dashboard_access_unauthorized(self):
        response = self.client.get('/dashboard', follow_redirects=True)
        self.assertIn(b'Please log in to access this page.', response.data)
        self.assertIn(b'Login', response.data)

    def test_dashboard_access_authorized(self):
        self._register_user(username="dashuser", email="dash@example.com", password="dashpassword")
        self._login_user(email="dash@example.com", password="dashpassword")
        response = self.client.get('/dashboard')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Welcome to your Dashboard, dashuser!', response.data)

class TestAPIRoutes(BaseTestCase):
    def test_summarize_lesson_api(self):
        response = self.client.post('/api/summarize_lesson') # No login required by current setup
        self.assertEqual(response.status_code, 200)
        json_data = response.get_json()
        self.assertEqual(json_data['status'], 'success')
        self.assertIn('placeholder summary', json_data['summary_content'].lower())

if __name__ == '__main__':
    unittest.main()
