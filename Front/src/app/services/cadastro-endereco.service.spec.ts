import { TestBed } from '@angular/core/testing';

import { CadastroEnderecoService } from './cadastro-endereco.service';

describe('CadastroEnderecoService', () => {
  let service: CadastroEnderecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroEnderecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
