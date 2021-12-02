import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CadastroEndereco } from '../models/cadastro-endereco.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroEnderecoService {

  constructor(private http: HttpClient) { }
  post (cadastroEndereco: CadastroEndereco){
    return this.http.post<CadastroEndereco>(`${environment.baseApiUrl}/cadastroEndereco`, cadastroEndereco);
  }

  put(cadastroEndereco: CadastroEndereco){
    return this.http.put<CadastroEndereco>(`${environment.baseApiUrl}/cadastroEndereco`, cadastroEndereco);
  }
  getPeloId(id: number){
    return this.http.get<CadastroEndereco>(`${environment.baseApiUrl}/cadastroEndereco/${id}`);
  }
  get(){
    return this.http.get<CadastroEndereco>(`${environment.baseApiUrl}/cadastroEndereco`);
  }
}
