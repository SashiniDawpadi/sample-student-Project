import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css'],
})
export class ViewStudentComponent implements OnInit {
  studentId: string = '';
  studentDetails: any;
  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.studentId = data['id'];
    });

    this.studentService.viewStudent(this.studentId).subscribe((data) => {
      this.studentDetails = data;
      this.studentDetails = JSON.parse(this.studentDetails.data);
      console.log(this.studentDetails);
    });
  }
}
