import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-view-student-list',
  templateUrl: './view-student-list.component.html',
  styleUrls: ['./view-student-list.component.css'],
})
export class ViewStudentListComponent implements OnInit {
  listStudents: any;
  p: number = 1;
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.listStudents().subscribe((data: any) => {
      if (data !== undefined) {
        this.listStudents = data;
        this.listStudents = JSON.parse(this.listStudents.data);
        console.log(this.listStudents);
      }
    });
  }
}
