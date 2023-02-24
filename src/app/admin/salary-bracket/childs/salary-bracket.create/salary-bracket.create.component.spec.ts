import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryBracketCreateComponent } from './salary-bracket.create.component';

describe('SalaryBracketCreateComponent', () => {
  let component: SalaryBracketCreateComponent;
  let fixture: ComponentFixture<SalaryBracketCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryBracketCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryBracketCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
