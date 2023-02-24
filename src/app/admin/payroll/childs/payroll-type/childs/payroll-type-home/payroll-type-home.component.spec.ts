import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollTypeHomeComponent } from './payroll-type-home.component';

describe('PayrollTypeHomeComponent', () => {
  let component: PayrollTypeHomeComponent;
  let fixture: ComponentFixture<PayrollTypeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollTypeHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollTypeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
