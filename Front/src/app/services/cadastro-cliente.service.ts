import { Injectable } from '@angular/core';
import { CadastroCliente } from '../models/cadastro-cliente.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

  cadastroCliente!: CadastroCliente;
  constructor(private http: HttpClient) { }

  post(cadastroCliente: CadastroCliente){
    return this.http.post<CadastroCliente>(`http://localhost:5000/CadastroCliente`, cadastroCliente);

  }

  login(cadastroCliente: CadastroCliente){
    return this.http.post<CadastroCliente>(`${environment.baseApiUrl}/CadastroCliente/login`, cadastroCliente);
  }

  put(cadastroCliente: CadastroCliente){
    return this.http.put<CadastroCliente>(`${environment.baseApiUrl}/cadastroCliente`,cadastroCliente);
  }

  get(){
    return this.http.get<CadastroCliente>(`${environment.baseApiUrl}/cadastroCliente`);
  }

  getPeloId(id: number){
    return this.http.get<CadastroCliente>(`${environment.baseApiUrl}/cadastroCliente/${id}`);
  }

  

}
