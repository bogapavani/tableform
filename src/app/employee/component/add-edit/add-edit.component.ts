import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { EmployeeContact } from '../../services/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  error: any
  employeeForm: any;
  form: any;
  editData: any;
  user: any = {};
  isCollapsed = false;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  } 
  @Output()
  createUsercontact = new EventEmitter<EmployeeContact>();

  numberRegex = /^((\\+91-?)|0)?[0-9]{10}$/;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private services: EmployeesService
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.numberRegex)]]
    })
  }



  ngOnInit(): void {
    
 }

  get f() {
    return this.employeeForm.controls;
  }
 

  submit() {
    if (!this.employeeForm.valid) {
      // this.form="required";
      this.employeeForm.markAllAsTouched();
    } else {
      console.log(this.employeeForm.value);
      this.services.create(this.employeeForm.value);
      this.router.navigate(['/employee'])
      
       }
    }



    cancel() {
      this.router.navigate(['/employee'])

    }

  }
