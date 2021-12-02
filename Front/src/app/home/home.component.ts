import { Component, OnInit } from '@angular/core';
import { CadastroProdutos } from '../models/cadastro-produtos.model';
import { CadastroProdutosService } from '../services/cadastro-produtos.service';
import { CadastroUsuarioMasterService } from '../services/cadastro-usuario-master.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cadastroProdutos: CadastroProdutos[] = [];
  constructor(private cadastroProdutosService: CadastroProdutosService) { }

  

  ngOnInit(): void {
    
  }
  
}
