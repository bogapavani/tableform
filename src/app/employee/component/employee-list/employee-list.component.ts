import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { EmployeeContact } from '../../services/employee.model';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  isCollapsed = false;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
  employeeData: EmployeeContact[] = []; // Array<string>
  usercont: EmployeeContact | undefined;

  constructor(private employeeService: EmployeesService,
     private router: Router,
  ) {
  }
  edit(employeeData: EmployeeContact) {
    console.log(employeeData);
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', JSON.stringify(employeeData));
    this.router.navigate(['/employee/edit']);
    this.employeeService.update(employeeData);

  }
  ngOnInit() {
    console.log('usercontact:init');
    this.employeeData = this.employeeService.getall();
    console.log(this.employeeData);
  }

  delete(employeeData: EmployeeContact) {
    console.log(employeeData);
    this.employeeService.delete(employeeData);
  }


  add() {

    this.router.navigate(['/employee/add']);
  }
}

