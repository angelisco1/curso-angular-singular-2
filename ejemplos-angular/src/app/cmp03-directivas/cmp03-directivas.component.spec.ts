import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp03DirectivasComponent } from './cmp03-directivas.component';

describe('Cmp03DirectivasComponent', () => {
  let component: Cmp03DirectivasComponent;
  let fixture: ComponentFixture<Cmp03DirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp03DirectivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp03DirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
