import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  baseUrl: string = 'http://localhost:5000/api/SampleProject/Student/';

  constructor(private htpp: HttpClient) {}

  listStudents() {
    return this.htpp.get(this.baseUrl + 'SelectAllStudents');
  }

  viewStudent(id: string) {
    return this.htpp.get(this.baseUrl + 'SelectById/?StudentId=' + id);
  }

  addStudent(studentObj: any) {
    console.log(studentObj);
    return this.htpp.post(this.baseUrl + 'AddStudent', studentObj);
  }

  deleteStudent(id: string) {
    return this.htpp.delete(this.baseUrl + 'DeleteStudent/?StudentId=' + id);
  }

  updateStudent(id: string) {
    return this.htpp.put(this.baseUrl + 'UpdateStudent/?StudentId=', id);
  }
}
