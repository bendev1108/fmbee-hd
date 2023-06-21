import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotFormComponent } from './plot-form.component';

describe('PlotFormComponent', () => {
  let component: PlotFormComponent;
  let fixture: ComponentFixture<PlotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
