import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollTypeCreateComponent } from './payroll-type-create.component';

describe('PayrollTypeCreateComponent', () => {
  let component: PayrollTypeCreateComponent;
  let fixture: ComponentFixture<PayrollTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollTypeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
