import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeContact } from '../../services/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  isCollapsed = false;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeesService) {
    this.editEmployeeForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.numberRegex)]]
    });
  }
  editEmployeeForm: any;
  userId: any;
 

  numberRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  ngOnInit() {
    const userId = JSON.parse(localStorage.getItem('editUserId') || " ");
    console.log(userId);
    console.log({
      id: userId.id,
      name: userId.name,
      dateOfBirth: userId.dateOfBirth,
      phoneNumber: userId.phoneNumber
    });
    this.editEmployeeForm.patchValue({
      id: userId.id,
      name: userId.name,
      dateOfBirth: userId.dateOfBirth,
      phoneNumber: userId.phoneNumber
    })


  }

  get f() {
    return this.editEmployeeForm.controls;
  }

  onSubmit() {
    this.employeeService.update(this.editEmployeeForm.value);
    this.router.navigate(['/employee']);
  }

  onCancel() {
    this.router.navigate(['/employee']);
  }
}
