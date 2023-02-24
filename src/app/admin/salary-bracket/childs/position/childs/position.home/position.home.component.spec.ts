import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionHomeComponent } from './position.home.component';

describe('PositionHomeComponent', () => {
  let component: PositionHomeComponent;
  let fixture: ComponentFixture<PositionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
