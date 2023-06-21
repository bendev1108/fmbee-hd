import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarcaneCueGroupsComponent } from './sugarcane-cue-groups.component';

describe('SugarcaneCueGroupsComponent', () => {
  let component: SugarcaneCueGroupsComponent;
  let fixture: ComponentFixture<SugarcaneCueGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugarcaneCueGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugarcaneCueGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
