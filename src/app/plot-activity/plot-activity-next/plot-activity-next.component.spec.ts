import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotActivityNextComponent } from './plot-activity-next.component';

describe('PlotActivityNextComponent', () => {
  let component: PlotActivityNextComponent;
  let fixture: ComponentFixture<PlotActivityNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotActivityNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotActivityNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
