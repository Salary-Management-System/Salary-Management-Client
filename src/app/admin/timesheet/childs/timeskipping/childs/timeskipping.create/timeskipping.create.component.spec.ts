import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeskippingCreateComponent } from './timeskipping.create.component';

describe('TimeskippingCreateComponent', () => {
  let component: TimeskippingCreateComponent;
  let fixture: ComponentFixture<TimeskippingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeskippingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeskippingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
