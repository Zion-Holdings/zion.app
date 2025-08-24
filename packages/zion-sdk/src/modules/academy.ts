import { HttpClient } from '../http';
import { Course } from '../types';

export class AcademyModule {
  constructor(private http: HttpClient) {}

  listCourses() {
    return this.http.request<Course[]>('GET', '/academy/courses');
  }

  getCourse(courseId: string) {
    return this.http.request<Course>('GET', `/academy/courses/${courseId}`);
  }
}