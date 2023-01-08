import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewStudentListComponent } from './view-student-list/view-student-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    ViewStudentComponent,
    ViewStudentListComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatSnackBarModule,
    MatDatepickerModule,
  ],
  exports: [
    AddStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    ViewStudentComponent,
    ViewStudentListComponent,
  ],
})
export class StudentModule {}
