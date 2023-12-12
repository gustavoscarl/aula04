import { TestBed } from '@angular/core/testing';

import { ServicosPostagemService } from './servicos-postagem.service';

describe('ServicosPostagemService', () => {
  let service: ServicosPostagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosPostagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
