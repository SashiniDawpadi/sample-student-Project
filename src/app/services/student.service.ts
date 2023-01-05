import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  baseUrl: string = 'http://localhost:5000/api/SampleProject/Student/';

  constructor(private http: HttpClient) {}

  listStudents() {
    return this.http.get(this.baseUrl + 'SelectAllStudents');
  }

  viewStudent(id: string) {
    return this.http.get(this.baseUrl + 'SelectById/?StudentId=' + id);
  }

  addStudent(studentObj: any) {
    console.log(studentObj);
    return this.http.post(this.baseUrl + 'AddStudent', studentObj);
  }

  deleteStudent(id: string) {
    return this.http.delete(this.baseUrl + 'DeleteStudent/?StudentId=' + id);
  }

  updateStudent(id: string, studentObj: any) {
    console.log(id);
    return this.http.put(
      this.baseUrl + 'UpdateStudent/?StudentId=' + id,
      studentObj
    );
  }
}
