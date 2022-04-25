import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCvComponent } from './form-cv.component';

describe('FormCvComponent', () => {
  let component: FormCvComponent;
  let fixture: ComponentFixture<FormCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
