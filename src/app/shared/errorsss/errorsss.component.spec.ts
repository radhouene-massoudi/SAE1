import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsssComponent } from './errorsss.component';

describe('ErrorsssComponent', () => {
  let component: ErrorsssComponent;
  let fixture: ComponentFixture<ErrorsssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
