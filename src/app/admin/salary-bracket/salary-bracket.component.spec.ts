import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryBracketComponent } from './salary-bracket.component';

describe('SalaryBracketComponent', () => {
  let component: SalaryBracketComponent;
  let fixture: ComponentFixture<SalaryBracketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryBracketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryBracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
