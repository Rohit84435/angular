import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { DepartmentService } from '../../service/department-service';
import { flatMap } from 'rxjs';
// import { CommonModule } from '../../../../../node_modules/@angular/common/common_module.d';

@Component({
  selector: 'app-ng-container',
  imports: [CommonModule],
  templateUrl: './ng-container.html',
  styleUrl: './ng-container.css',
})
export class NgContainer {
  isContainer: boolean = true;
  isLoad: boolean = false;
  http = inject(HttpClient);

  constructor(private deptServ: DepartmentService) {}
  // ngOnInit() {
  //   this.getUser();
  // }
  departmentList: any[] = [];
  getUser() {
    this.isLoad = true;
    this.deptServ.getDepartment().subscribe((res: any) => {
      this.departmentList = res.data;
      console.log(this.departmentList);
      this.isLoad = false;
    });
  }
}
