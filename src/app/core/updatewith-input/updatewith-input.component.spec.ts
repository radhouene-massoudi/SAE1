import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatewithInputComponent } from './updatewith-input.component';

describe('UpdatewithInputComponent', () => {
  let component: UpdatewithInputComponent;
  let fixture: ComponentFixture<UpdatewithInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatewithInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatewithInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
