import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-attribute-dir',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-dir.html',
  styleUrl: './attribute-dir.css',
})
export class AttributeDir {
  bgColor: string = 'bg-primary';
  bgColor2: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
  constructor(private router: Router) {}
  studentList: any[] = [
    { studentId: 1, marks: 94, gender: 'Male', name: 'Raj', city: 'Pune', isActive: false },
    { studentId: 2, marks: 54, gender: 'Male', name: 'Rohan', city: 'Gaya', isActive: false },
    { studentId: 3, marks: 84, gender: 'Female', name: 'Rohit', city: 'Kolkata', isActive: true },
    { studentId: 4, marks: 74, gender: 'Male', name: 'Rose', city: 'Banglore', isActive: false },
  ];

  navigateToArttribute() {
    this.router.navigateByUrl('structural-dir');
  }

  clickBtn1() {
    this.bgColor = 'bg-danger';
  }
  clickBtn2() {
    this.bgColor = 'bg-primary';
  }

  toggelBtn() {
    this.bgColor2 = !this.bgColor2;
  }
}
