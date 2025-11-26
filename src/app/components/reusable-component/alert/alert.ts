import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert implements OnChanges {
  @Input() message: string = '';
  @Input() alertType: string = '';
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('OnChange Trigger');
  }
}
