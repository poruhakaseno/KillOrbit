import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePTNComponent } from './update-ptn.component';

describe('UpdatePTNComponent', () => {
  let component: UpdatePTNComponent;
  let fixture: ComponentFixture<UpdatePTNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePTNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePTNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
