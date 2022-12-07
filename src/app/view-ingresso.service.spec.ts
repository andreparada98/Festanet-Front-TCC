import { TestBed } from '@angular/core/testing';

import { ViewIngressoService } from './view-ingresso.service';

describe('ViewIngressoService', () => {
  let service: ViewIngressoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewIngressoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
