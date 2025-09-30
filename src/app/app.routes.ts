import { Routes } from '@angular/router';
import { AddEmployee } from './components/add-employee/add-employee';
import { EmployeeList } from './components/employee-list/employee-list';
import { StructuralDir } from './components/directives/structural-dir/structural-dir';
import { AttributeDir } from './components/directives/attribute-dir/attribute-dir';
import { Pipes } from './components/pipes/pipes';
import { Template } from './components/forms/template/template';
import { Reactive } from './components/forms/reactive/reactive';

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
];
