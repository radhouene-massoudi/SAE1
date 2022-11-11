import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrpductComponent } from './list-prpduct.component';

describe('ListPrpductComponent', () => {
  let component: ListPrpductComponent;
  let fixture: ComponentFixture<ListPrpductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrpductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrpductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
