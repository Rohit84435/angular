import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  imports: [],
  templateUrl: './lifecycle-event.html',
  styleUrl: './lifecycle-event.css',
})
export class LifecycleEvent implements OnInit {
  firstName: string;
  constructor() {
    console.log('constructor');
    this.firstName = '';
  }

  ngOnInit() {
    console.log('OnInit');
  }
}
