import { TestBed } from '@angular/core/testing';

import { CadastroUsuarioMasterService } from './cadastro-usuario-master.service';

describe('CadastroUsuarioMasterService', () => {
  let service: CadastroUsuarioMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroUsuarioMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
