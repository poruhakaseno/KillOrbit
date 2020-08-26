import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTNListComponent } from './ptnlist.component';

describe('PTNListComponent', () => {
  let component: PTNListComponent;
  let fixture: ComponentFixture<PTNListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTNListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTNListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
