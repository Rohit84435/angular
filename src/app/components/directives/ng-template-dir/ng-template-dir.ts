import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
// import { NgIf } from '../../../../../node_modules/@angular/common/common_module.d';

@Component({
  selector: 'app-ng-template-dir',
  imports: [CommonModule],
  templateUrl: './ng-template-dir.html',
  styleUrl: './ng-template-dir.css',
})
export class NgTemplateDir {
  isUserLoggedIn: boolean = true;
  loggerUserName: string = 'Rohit';

  @ViewChild('dynamicTemp') dyanTemplate: TemplateRef<any> | undefined; // It is like getElementByid() in js
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dyanContainer:
    | ViewContainerRef
    | undefined;

  loadContent() {
    if (this.dyanTemplate) {
      this.dyanContainer?.createEmbeddedView(this.dyanTemplate);
    }
  }
}
