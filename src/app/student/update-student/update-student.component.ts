import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  stuId: any;
  studentDetails: any;
  dataLoaded: boolean = false;
  editStudentForm: FormGroup = new FormGroup({});
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe((data) => {
      this.stuId = data.id;
    });

    if (this.stuId !== undefined) {
      this.studentService
        .viewStudent(this.stuId)
        .toPromise()
        .then((data) => {
          this.studentDetails = data;
          this.studentDetails = JSON.parse(this.studentDetails.data);

          console.log(this.studentDetails);

          this.editStudentForm = this.formBuilder.group({
            StudentId: new FormControl(this.studentDetails[0].studentId, [
              Validators.required,
            ]),
            fName: new FormControl(this.studentDetails[0].fName, [
              Validators.required,
              Validators.maxLength(20),
            ]),
            lName: new FormControl(this.studentDetails[0].lName, [
              Validators.required,
              Validators.maxLength(20),
            ]),
            DateOfBirth: new FormControl(this.studentDetails[0].dateOfBirth, [
              Validators.required,
            ]),
            Address: new FormControl(this.studentDetails[0].address, [
              Validators.required,
              Validators.maxLength(100),
            ]),
          });
          this.dataLoaded = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  maxDate: Date = new Date();
  updateStudent() {
    this.studentService
      .updateStudent(this.stuId, this.editStudentForm.value)
      .subscribe(
        (data) => {
          if (this.stuId != this.editStudentForm.value.StudentId) {
            this._snackBar.open(` Can't update the StudentId `);
            return;
          }

          this._snackBar.open('Student updated successfully  ✅');
          this.router.navigateByUrl('');
        },
        (err) => {
          this._snackBar.open(err.error.data.message);
        }
      );
  }
}
