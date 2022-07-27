import { Injectable } from '@angular/core';
import { EmployeeContact } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employeeData: EmployeeContact[] = [{
    id: 0,
    name: 'Alex',
    dateOfBirth: '24-11-1997',
    phoneNumber: 8106812387
  },
  {
    id: 1,
    name: 'Jhon',
    dateOfBirth: '24-11-1997',
    phoneNumber: 8106812387
  },
  {
    id: 2,
    name: 'alekhya',
    dateOfBirth: '24-11-1997',
    phoneNumber: 8106812387
  }];

  create(usercontact: EmployeeContact) {
    const itemIndex = this.employeeData.length;
    usercontact.id = this.getnextId();
    console.log("hello", usercontact);
    this.employeeData[itemIndex] = usercontact;
  }

  delete(usercontact: EmployeeContact) {
    this.employeeData.splice(this.employeeData.indexOf(usercontact), 1);
  }

  update(usercontact: EmployeeContact) {
    const itemIndex = this.employeeData.findIndex(item => item.id === usercontact.id);
    console.log(itemIndex);
    this.employeeData[itemIndex] = usercontact;
  }

  getall(): EmployeeContact[] {
    console.log('employeeDataervice:getall');
    console.log(this.employeeData);
    return this.employeeData;
  }

  

  // getUserById(id: number) {
  //   console.log(id);
  //   const itemIndex = this.employeeData.findIndex(item => item.id === id);
  //   console.log(itemIndex);
  //   return this.employeeData[itemIndex];
  // }

  getnextId(): number {
    let highest = 0;
    this.employeeData.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
}

