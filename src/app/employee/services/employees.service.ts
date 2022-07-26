// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Subscriber } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeesService {
//   // url='https://f7ca-115-98-179-137.ngrok.io/getData'
//   constructor(private http: HttpClient) { }

//   getData() {
//     return this.http.get('http://b489-115-98-179-137.ngrok.io/get')
//   }

//   postData(data: any) {
//     console.log(data);
//     // const headers = { 'Authorization': 'Bearer ad2a3ddb10a76dab2ba5f94ddc7003bec4de345c5689035eefc120cd18f89f1e', 'My-Custom-Header': 'foobar' };
//     // const body = { title: { "name": "Pavani", "email": "patel_param@walsh.co", "gender": "female", "status": "inactive" } };


//     return this.http.post('https://gorest.co.in/public-api/users', data)
//   }


//   addUser(user: any) {
//     let users = [];
//     if (localStorage.getItem('Users')) {
//       users = JSON.parse(localStorage.getItem('Users') || "");

//       console.log(...users);
//       users = [user, ...users]

//     } else {
//       users = [user];
//     }
//     localStorage.setItem('Users', JSON.stringify(user))
//   }


// }

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

