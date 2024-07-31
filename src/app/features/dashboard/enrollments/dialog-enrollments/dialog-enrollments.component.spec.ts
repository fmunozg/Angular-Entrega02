import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEnrollmentsComponent } from './dialog-enrollments.component';

describe('DialogEnrollmentsComponent', () => {
  let component: DialogEnrollmentsComponent;
  let fixture: ComponentFixture<DialogEnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEnrollmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
