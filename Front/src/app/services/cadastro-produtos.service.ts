import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CadastroProdutos } from '../models/cadastro-produtos.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroProdutosService {

  constructor(private http: HttpClient) { }
  post (cadastroProdutos: CadastroProdutos){
    return this.http.post<CadastroProdutos>(`${environment.baseApiUrl}/cadastroProdutos`, cadastroProdutos);

  }
  put(cadastroProdutos: CadastroProdutos){
    return this.http.put<CadastroProdutos>(`${environment.baseApiUrl}/cadastroProdutos`, cadastroProdutos);
  }
  getPeloId(id:number){
    return this.http.get<CadastroProdutos>(`${environment.baseApiUrl}/cadastroProdutos/${id}`);
  }
  get(){
    return this.http.get<CadastroProdutos>(`${environment.baseApiUrl}/cadastroProdutos`);
  }
}
