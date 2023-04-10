import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CustomersRoutingModule } from './customers-routing.module';
// import { CustomerListComponent } from './customer-list/customer-list.component';
import { EmployeesRoutingModule } from '../employees/employees-routing.module';
import { EmployeeListComponent } from '../employees/employee-list/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EmployeeListComponent]
})
export class EmployeesModule { }