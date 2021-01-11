import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteDialogComponent } from './add-site-dialog.component';

describe('AddSiteDialogComponent', () => {
  let component: AddSiteDialogComponent;
  let fixture: ComponentFixture<AddSiteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSiteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
