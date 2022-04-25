import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp04ReferenciasComponent } from './cmp04-referencias.component';

describe('Cmp04ReferenciasComponent', () => {
  let component: Cmp04ReferenciasComponent;
  let fixture: ComponentFixture<Cmp04ReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp04ReferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp04ReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
