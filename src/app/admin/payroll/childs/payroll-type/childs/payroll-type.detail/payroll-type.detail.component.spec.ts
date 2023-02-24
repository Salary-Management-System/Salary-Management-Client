import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollTypeDetailComponent } from './payroll-type.detail.component';

describe('PayrollTypeDetailComponent', () => {
  let component: PayrollTypeDetailComponent;
  let fixture: ComponentFixture<PayrollTypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollTypeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
