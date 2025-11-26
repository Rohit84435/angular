import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateDir } from './ng-template-dir';

describe('NgTemplateDir', () => {
  let component: NgTemplateDir;
  let fixture: ComponentFixture<NgTemplateDir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateDir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateDir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
