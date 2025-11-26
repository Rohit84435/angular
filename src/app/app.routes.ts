import { Routes } from '@angular/router';
import { AddEmployee } from './components/add-employee/add-employee';
import { EmployeeList } from './components/employee-list/employee-list';
import { StructuralDir } from './components/directives/structural-dir/structural-dir';
import { AttributeDir } from './components/directives/attribute-dir/attribute-dir';
import { Pipes } from './components/pipes/pipes';
import { Template } from './components/forms/template/template';
import { Reactive } from './components/forms/reactive/reactive';
import { GetApi } from './components/get-api/get-api';
import { PostApi } from './components/post-api/post-api';
import { LifecycleEvent } from './components/lifecycle-event/lifecycle-event';
import { NgTemplateDir } from './components/directives/ng-template-dir/ng-template-dir';
import { NgContainer } from './components/directives/ng-container/ng-container';
import { ViewChild } from './components/view-child/view-child';

export const routes: Routes = [
  {
    path: 'add-emp',
    component: AddEmployee,
  },
  {
    path: 'emp-list',
    component: EmployeeList,
  },
  {
    path: 'structural-dir',
    component: StructuralDir,
  },
  {
    path: 'attribute-dir',
    component: AttributeDir,
  },
  {
    path: 'pipes',
    component: Pipes,
  },
  {
    path: 'template',
    component: Template,
  },
  {
    path: 'reactive',
    component: Reactive,
  },
  {
    path: 'get-api',
    component: GetApi,
  },
  {
    path: 'post-api',
    component: PostApi,
  },
  {
    path: 'lifecycle-event',
    component: LifecycleEvent,
  },
  {
    path: 'ng-template-dir',
    component: NgTemplateDir,
  },
  {
    path: 'ng-container',
    component: NgContainer,
  },
  {
    path: 'view-child',
    component: ViewChild,
  },
];
