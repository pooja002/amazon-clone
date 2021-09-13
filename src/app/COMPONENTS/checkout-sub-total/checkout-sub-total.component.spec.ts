import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSubTotalComponent } from './checkout-sub-total.component';

describe('CheckoutSubTotalComponent', () => {
  let component: CheckoutSubTotalComponent;
  let fixture: ComponentFixture<CheckoutSubTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutSubTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSubTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
