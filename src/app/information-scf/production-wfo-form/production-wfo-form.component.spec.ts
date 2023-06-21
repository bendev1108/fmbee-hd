import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionWfoFormComponent } from './production-wfo-form.component';

describe('ProductionWfoFormComponent', () => {
  let component: ProductionWfoFormComponent;
  let fixture: ComponentFixture<ProductionWfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionWfoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionWfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
