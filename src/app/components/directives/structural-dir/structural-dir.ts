import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './structural-dir.html',
  styleUrl: './structural-dir.css',
})
export class StructuralDir {
  isDiv1Visible: boolean = true;
  isToggle: boolean = false;
  num1: string = '';
  num2: string = '';
  isChecked: boolean = false;
  drop: string = '';
  cites: string[] = ['Pune', 'Mumbai', 'Nagpur', 'Gaya'];
  studentList: any[] = [
    { studentId: 1, name: 'Raj', city: 'Pune', isActive: false },
    { studentId: 2, name: 'Rohan', city: 'Gaya', isActive: false },
    { studentId: 3, name: 'Rohit', city: 'Kolkata', isActive: true },
    { studentId: 4, name: 'Rose', city: 'Banglore', isActive: false },
  ];
  hideDiv(val: boolean) {
    this.isDiv1Visible = val;
  }
  showDiv(val: boolean) {
    this.isDiv1Visible = val;
  }
  toggleDiv() {
    this.isToggle = !this.isToggle;
  }
}
