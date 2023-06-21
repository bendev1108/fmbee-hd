import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionMoneyFormComponent } from './promotion-money-form.component';

describe('PromotionMoneyFormComponent', () => {
  let component: PromotionMoneyFormComponent;
  let fixture: ComponentFixture<PromotionMoneyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionMoneyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionMoneyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
