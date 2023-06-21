import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionWfoDetailComponent } from './production-wfo-detail.component';

describe('ProductionWfoDetailComponent', () => {
  let component: ProductionWfoDetailComponent;
  let fixture: ComponentFixture<ProductionWfoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionWfoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionWfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
