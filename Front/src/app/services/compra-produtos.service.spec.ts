import { TestBed } from '@angular/core/testing';

import { CompraProdutosService } from './compra-produtos.service';

describe('CompraProdutosService', () => {
  let service: CompraProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompraProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
