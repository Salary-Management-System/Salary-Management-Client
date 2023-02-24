import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeskippingHomeComponent } from './timeskipping.home.component';

describe('TimeskippingHomeComponent', () => {
  let component: TimeskippingHomeComponent;
  let fixture: ComponentFixture<TimeskippingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeskippingHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeskippingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
