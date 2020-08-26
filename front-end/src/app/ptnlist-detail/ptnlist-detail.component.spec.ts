import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTNListDetailComponent } from './ptnlist-detail.component';

describe('PTNListDetailComponent', () => {
  let component: PTNListDetailComponent;
  let fixture: ComponentFixture<PTNListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTNListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTNListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
