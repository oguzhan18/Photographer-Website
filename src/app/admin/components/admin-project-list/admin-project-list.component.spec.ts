import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectListComponent } from './admin-project-list.component';

describe('AdminProjectListComponent', () => {
  let component: AdminProjectListComponent;
  let fixture: ComponentFixture<AdminProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
