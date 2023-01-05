import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css'],
})
export class DeleteStudentComponent implements OnInit {
  studentId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.studentId = data.id;
      console.log(this.studentId);
    });

    if (this.studentId) {
      this.studentService.deleteStudent(this.studentId).subscribe(
        (data) => {
          this._snackBar.open('Student deleted successfully ');
          this.router.navigate(['student']);
        },
        (err) => {
          this._snackBar.open('Error deleting student   ❌');
        }
      );
    }
  }
}
