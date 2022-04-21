import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp02InputOutputComponent } from './cmp02-input-output.component';

describe('Cmp02InputOutputComponent', () => {
  let component: Cmp02InputOutputComponent;
  let fixture: ComponentFixture<Cmp02InputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp02InputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp02InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
