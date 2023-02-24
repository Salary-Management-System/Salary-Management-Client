import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeskippingComponent } from './timeskipping.component';

describe('TimeskippingComponent', () => {
  let component: TimeskippingComponent;
  let fixture: ComponentFixture<TimeskippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeskippingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeskippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
