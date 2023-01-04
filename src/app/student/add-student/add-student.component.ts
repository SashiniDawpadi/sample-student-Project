import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  addStudentForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.addStudentForm = this.formBuilder.group({
      StudentId: new FormControl(''),
      fName: new FormControl(''),
      lName: new FormControl(''),
      DOB: new FormControl(''),
      Address: new FormControl(''),
    });
  }

  addStudent() {
    this.studentService.addStudent(this.addStudentForm.value).subscribe(
      (data) => {
        // this._snackBar.open('Student added successfully');

        console.log(this.addStudentForm.value);
        console.log('Student added');
      },
      (err) => {
        // this._snackBar.open('Unable to add student');
        console.log(this.addStudentForm.value);
        console.log(err);
      }
    );
  }
}
