import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationSCFComponent } from './information-scf.component';

describe('InformationSCFComponent', () => {
  let component: InformationSCFComponent;
  let fixture: ComponentFixture<InformationSCFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationSCFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationSCFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
