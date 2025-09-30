import {
  AsyncPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable, map } from 'rxjs';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-pipes',
  imports: [NaPipe, AsyncPipe, JsonPipe, DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  firstName: string = 'Angular';
  myTitle: string = 'This is demo session';
  currentDate: Date = new Date();
  studentData: any = {
    name: 'Rohit kumar',
    age: 86,
    class: 'lower class',
    state: 'Bihar',
  };
  currentTime: Observable<Date> = new Observable<Date>();

  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }
}
