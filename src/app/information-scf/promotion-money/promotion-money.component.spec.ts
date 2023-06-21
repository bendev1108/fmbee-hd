import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionMoneyComponent } from './promotion-money.component';

describe('PromotionMoneyComponent', () => {
  let component: PromotionMoneyComponent;
  let fixture: ComponentFixture<PromotionMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
