import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../service/department-service';
import { Alert } from '../reusable-component/alert/alert';
import { MyButton } from '../reusable-component/my-button/my-button';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, Alert, MyButton],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css',
})
export class PostApi implements OnInit {
  deptObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };
  departmentList: any = [];
  constructor(private departServ: DepartmentService) {}
  ngOnInit(): void {
    this.getDeartment();
  }

  http = inject(HttpClient);
  getData(data: any) {
    debugger;
  }
  onSave() {
    this.departServ.onSave(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert('Department Added Successfully');
        this.getDeartment();
      } else {
        alert(res.message);
      }
    });
  }

  onEdit(data: any) {
    this.deptObj = data;
  }
  onUpdate() {
    this.http.post('/api/Complaint/UpdateDepartment', this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert('Department Updated Successfully');
        this.getDeartment();
      } else {
        alert(res.message);
      }
    });
  }

  onDelete(id: number) {
    debugger;
    let confirmBox = confirm('Are you sure?');
    if (confirmBox) {
      this.http
        .delete('/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' + id)
        .subscribe((res: any) => {
          if (res.result) {
            alert('Department Deleted Successfully');
            this.getDeartment();
          } else {
            alert(res.message);
          }
        });
    }
  }

  getDeartment() {
    this.departServ.getDepartment().subscribe((res: any) => {
      this.departmentList = res.data;
    });
  }
}
