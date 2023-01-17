import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditStudentComponent } from './student/add-edit-student/add-edit-student.component';

import { DeleteStudentComponent } from './student/delete-student/delete-student.component';

import { ViewStudentListComponent } from './student/view-student-list/view-student-list.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ViewStudentListComponent },
      { path: 'list', component: ViewStudentListComponent },
      { path: 'addStudent', component: AddEditStudentComponent },
      { path: 'delete/:id', component: DeleteStudentComponent },
      { path: 'update/:id', component: AddEditStudentComponent },
      { path: 'view/:id', component: ViewStudentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
