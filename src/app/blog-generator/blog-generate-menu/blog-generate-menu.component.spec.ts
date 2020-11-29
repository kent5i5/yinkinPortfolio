import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGenerateMenuComponent } from './blog-generate-menu.component';

describe('BlogGenerateMenuComponent', () => {
  let component: BlogGenerateMenuComponent;
  let fixture: ComponentFixture<BlogGenerateMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogGenerateMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGenerateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
