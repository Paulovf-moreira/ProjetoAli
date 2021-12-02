import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CadastroUsuarioMaster } from '../models/cadastro-usuario-master.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioMasterService {

  usuarioLogado!: CadastroUsuarioMaster;
  constructor(private http: HttpClient) { }
  post (cadastroUsuarioMaster:CadastroUsuarioMaster){
    return this.http.post<CadastroUsuarioMaster>(`${environment.baseApiUrl}/cadastroUsuarioMaster`,cadastroUsuarioMaster);

  }

  login(cadastroUsuarioMaster: CadastroUsuarioMaster){
    return this.http.post<CadastroUsuarioMaster>(`${environment.baseApiUrl}/cadastroUsuarioMaster/login`, cadastroUsuarioMaster);
  }
  put(cadastroUsuarioMaster:CadastroUsuarioMaster){
    return this.http.put<CadastroUsuarioMaster>(`${environment.baseApiUrl}/cadastroUsuarioMaster`,cadastroUsuarioMaster);

  }
  getPeloId(id:number){
    return this.http.get<CadastroUsuarioMaster>(`${environment.baseApiUrl}/cadastroUsuarioMaster/${id}`);
   

  }
  get(){
    return this.http.get<CadastroUsuarioMaster>(`${environment.baseApiUrl}/cadastroUsuarioMaster`);
  }
}
