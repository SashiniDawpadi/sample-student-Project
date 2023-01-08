import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  durationInSeconds = 5;
  addStudentForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.addStudentForm = this.formBuilder.group({
      StudentId: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      fName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      lName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      DateOfBirth: new FormControl('', [Validators.required]),
      Address: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
    });
  }

  maxDate: Date = new Date();

  addStudent() {
    this.studentService.addStudent(this.addStudentForm.value).subscribe(
      (data) => {
        this._snackBar.open('Student added successfully  ✅');

        this.router.navigateByUrl('');
      },
      (err) => {
        this._snackBar.open(err.error.data.message);
      }
    );
  }
}
