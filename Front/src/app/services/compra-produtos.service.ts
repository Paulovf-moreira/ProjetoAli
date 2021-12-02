import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompraProdutos } from '../models/compra-produtos.model';

@Injectable({
  providedIn: 'root'
})
export class CompraProdutosService {

  constructor(private http: HttpClient) { }
  post (compraProdutos: CompraProdutos){
    return this.http.post<CompraProdutos>(`${environment.baseApiUrl}/compraProdutos`, compraProdutos);
  }
  put(compraProdutos: CompraProdutos){
    return this.http.put<CompraProdutos>(`${environment.baseApiUrl}/compraProdutos`, compraProdutos);

  }
  getPeloId(id: number){
    return this.http.get<CompraProdutos>(`${environment.baseApiUrl}/compraProdutos/${id}`);

  }
  get(){
    return this.http.get<CompraProdutos>(`${environment.baseApiUrl}/compraProdutos`);
  }
}
