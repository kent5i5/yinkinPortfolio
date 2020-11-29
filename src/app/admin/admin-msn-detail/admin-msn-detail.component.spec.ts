import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMsnDetailComponent } from './admin-msn-detail.component';

describe('AdminMsnDetailComponent', () => {
  let component: AdminMsnDetailComponent;
  let fixture: ComponentFixture<AdminMsnDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMsnDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMsnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
