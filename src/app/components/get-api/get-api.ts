import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Alert } from '../reusable-component/alert/alert';

@Component({
  selector: 'app-get-api',
  imports: [Alert],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi {
  userList: any[] = [];
  customerList: any[] = [];
  alertTest: string = '';
  constructor(private http: HttpClient) {
    this.getAllCustomers();
  }

  onChange() {
    this.alertTest = 'Test ngOnchange';
  }

  getAllUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any) => {
      this.userList = data;
      console.log(this.userList);
    });
  }

  getAllCustomers() {
    this.http.get('/api/RealEstate/GetAllCustomers').subscribe((result: any) => {
      this.customerList = result.data;
      console.log(this.customerList);
    });
  }
}
