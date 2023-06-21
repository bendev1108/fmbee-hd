import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScqDetailsComponent } from './scq-details.component';

describe('ScqDetailsComponent', () => {
  let component: ScqDetailsComponent;
  let fixture: ComponentFixture<ScqDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScqDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScqDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
