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
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css'],
})
export class AddEditStudentComponent implements OnInit {
  stuId: any;
  dataLoaded: boolean = false;
  update: boolean = false;
  add: boolean = false;
  studentDetails: any;
  editStudentForm: FormGroup = new FormGroup({});
  maxDate: Date = new Date();
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe((data) => {
      this.stuId = data.id;
    });
    if (this.stuId !== undefined) {
      this.update = true;
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
              Validators.minLength(3),
              Validators.maxLength(10),
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
    } else {
      this.add = true;
      this.editStudentForm = this.formBuilder.group({
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
      this.dataLoaded = true;
    }
  }

  updateStudent() {
    if (this.stuId) {
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
    } else {
      this.studentService.addStudent(this.editStudentForm.value).subscribe(
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
}
