import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { DeleteStudentComponent } from './student/delete-student/delete-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { ViewStudentListComponent } from './student/view-student-list/view-student-list.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';

const routes: Routes = [
  { path: '', component: ViewStudentListComponent },
  { path: 'addStudent', component: AddStudentComponent },
  { path: 'update/:id', component: UpdateStudentComponent },
  { path: 'delete/:id', component: DeleteStudentComponent },
  { path: 'view/:id', component: ViewStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
