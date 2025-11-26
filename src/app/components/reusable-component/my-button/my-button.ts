import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css',
})
export class MyButton {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';
  @Output() onBtnClick = new EventEmitter<any>();
  onClick() {
    debugger;
    this.onBtnClick.emit('Whats going on?');
  }
}
