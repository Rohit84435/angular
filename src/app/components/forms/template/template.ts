import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  studentObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipcode: '',
    isAcceptTerms: false,
  };
  formValue: any;
  onSubmit() {
    this.formValue = this.studentObj;
  }

  onReset() {
    this.studentObj = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      zipcode: '',
      isAcceptTerms: false,
    };
  }
}
