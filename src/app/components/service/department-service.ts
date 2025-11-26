import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}
  onSave(obj: any) {
    return this.http.post('/api/Complaint/AddNewDepartment', obj);
  }
  getDepartment() {
    return this.http.get('/api/Complaint/GetParentDepartment');
  }
}
