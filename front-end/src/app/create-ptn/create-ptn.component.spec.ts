import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePTNComponent } from './create-ptn.component';

describe('CreatePTNComponent', () => {
  let component: CreatePTNComponent;
  let fixture: ComponentFixture<CreatePTNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePTNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePTNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
