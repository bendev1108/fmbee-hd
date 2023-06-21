import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionMoneyDetailComponent } from './promotion-money-detail.component';

describe('PromotionMoneyDetailComponent', () => {
  let component: PromotionMoneyDetailComponent;
  let fixture: ComponentFixture<PromotionMoneyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionMoneyDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionMoneyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
