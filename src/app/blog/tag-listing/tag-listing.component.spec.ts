import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListingComponent } from './tag-listing.component';

describe('TagListingComponent', () => {
  let component: TagListingComponent;
  let fixture: ComponentFixture<TagListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
