import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusHomeComponent } from './bonus-home.component';

describe('BonusHomeComponent', () => {
  let component: BonusHomeComponent;
  let fixture: ComponentFixture<BonusHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonusHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
