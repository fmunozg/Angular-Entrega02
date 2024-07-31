import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStudentsComponent } from './dialog-students.component';

describe('DialogStudentsComponent', () => {
  let component: DialogStudentsComponent;
  let fixture: ComponentFixture<DialogStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
