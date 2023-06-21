import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionWfoComponent } from './production-wfo.component';

describe('ProductionWfoComponent', () => {
  let component: ProductionWfoComponent;
  let fixture: ComponentFixture<ProductionWfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionWfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionWfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
