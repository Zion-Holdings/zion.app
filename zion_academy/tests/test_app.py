import os
import sys
import pytest

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import app, db
from models import User, Category, Course, Lesson

@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    with app.app_context():
        db.create_all()
        user = User(username='tester', email='t@example.com', password_hash='x')
        db.session.add(user)
        cat = Category(name='TestCat')
        db.session.add(cat)
        db.session.commit()
        course = Course(title='Test Course', description='d', category_id=cat.id)
        db.session.add(course)
        db.session.commit()
        l1 = Lesson(title='L1', content_type='text', content_data='a', lesson_order=1, course_id=course.id)
        l2 = Lesson(title='L2', content_type='text', content_data='b', lesson_order=2, course_id=course.id)
        db.session.add_all([l1, l2])
        db.session.commit()
    with app.test_client() as client:
        yield client
    with app.app_context():
        db.drop_all()


def test_progress_flow(client):
    r = client.post('/api/enroll', json={'user_id': 1, 'course_id': 1})
    assert r.status_code == 201
    r = client.post('/api/complete', json={'user_id': 1, 'course_id': 1, 'lesson_id': 1})
    assert r.get_json()['progress'] == 50
    r = client.post('/api/complete', json={'user_id': 1, 'course_id': 1, 'lesson_id': 2})
    assert r.get_json()['progress'] == 100
    r = client.get('/api/progress/1')
    data = r.get_json()
    assert data['enrollments'][0]['progress'] == 100
    assert data['enrollments'][0]['completed'] is True
    assert len(data['achievements']) == 1


def test_quiz_and_summary(client):
    r = client.post('/api/generate-quiz', json={'topic': 'Zion'})
    assert r.status_code == 200
    assert 'quiz' in r.get_json()

    r = client.post('/api/summarize', json={'text': 'Zion is great. It helps founders.'})
    assert r.status_code == 200
    assert 'summary' in r.get_json()
