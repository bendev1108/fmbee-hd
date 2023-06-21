import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotActivityComponent } from './plot-activity.component';

describe('PlotActivityComponent', () => {
  let component: PlotActivityComponent;
  let fixture: ComponentFixture<PlotActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
