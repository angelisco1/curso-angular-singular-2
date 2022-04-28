import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp10RoutingComponent } from './cmp10-routing.component';

describe('Cmp10RoutingComponent', () => {
  let component: Cmp10RoutingComponent;
  let fixture: ComponentFixture<Cmp10RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp10RoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp10RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
