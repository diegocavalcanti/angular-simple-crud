import { TestBed } from '@angular/core/testing';

import { ExemploService } from './exemplo.service';

describe('ExemploService', () => {
  let service: ExemploService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExemploService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
