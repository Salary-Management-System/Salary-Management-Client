import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelCreateComponent } from './level.create.component';

describe('LevelCreateComponent', () => {
  let component: LevelCreateComponent;
  let fixture: ComponentFixture<LevelCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
