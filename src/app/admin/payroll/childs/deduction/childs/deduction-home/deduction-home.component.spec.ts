import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductionHomeComponent } from './deduction-home.component';

describe('DeductionHomeComponent', () => {
  let component: DeductionHomeComponent;
  let fixture: ComponentFixture<DeductionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeductionHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeductionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
