import { TestBed } from '@angular/core/testing';

import { DatosGuardadosGuard } from './datos-guardados.guard';

describe('DatosGuardadosGuard', () => {
  let guard: DatosGuardadosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DatosGuardadosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
