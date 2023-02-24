import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryBracketHomeComponent } from './salary-bracket-home.component';

describe('SalaryBracketHomeComponent', () => {
  let component: SalaryBracketHomeComponent;
  let fixture: ComponentFixture<SalaryBracketHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryBracketHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryBracketHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
