import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactusForm: any;
  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.contactusForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      Confirmemail: ['', [Validators.required, Validators.email]],
      productName:['',Validators.required],
      upc:['',Validators.required],
      code:['',Validators.required],
      comment:['',Validators.required]

    })
  }

  get f() {
    return this.contactusForm.controls;
  }

}
