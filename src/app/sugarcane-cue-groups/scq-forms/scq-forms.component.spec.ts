import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScqFormsComponent } from './scq-forms.component';

describe('ScqFormsComponent', () => {
  let component: ScqFormsComponent;
  let fixture: ComponentFixture<ScqFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScqFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScqFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
