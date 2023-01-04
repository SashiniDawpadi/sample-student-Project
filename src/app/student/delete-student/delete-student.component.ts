import { Component, OnInit } from '@angular/core';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.studentId = data.id;
      console.log(this.studentId);
    });

    if (this.studentId) {
      this.studentService.deleteStudent(this.studentId).subscribe(
        (data) => {
          console.log('Deleted student');
          this.router.navigate(['']);
        },
        (err) => {
          console.log('Error deleting student');
        }
      );
    }
  }
}
