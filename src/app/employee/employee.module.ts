import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { AddEditComponent } from './component/add-edit/add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './component/edit/edit.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEditComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ]

})
export class EmployeeModule { }
