import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingSummaryComponent } from './building-summary.component';

describe('BuildingSummaryComponent', () => {
  let component: BuildingSummaryComponent;
  let fixture: ComponentFixture<BuildingSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
