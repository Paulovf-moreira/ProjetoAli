import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroProdutos } from '../models/cadastro-produtos.model';
import { CadastroProdutosService } from '../services/cadastro-produtos.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent implements OnInit {

  /*id !: number;
    titulo !: string;
    descricao !: string;
    imagem !: string;
    valor !: number;
    categoria !: string;*/ 

    cadastroProduto:CadastroProdutos = new CadastroProdutos();

    form:FormGroup;

    tituloFormControl = this.fb.control('',{validators:[Validators.required], updateOn:"blur"});
    descricaoFormControl = this.fb.control('',{validators:[Validators.required], updateOn:"blur"});
    imagemFormControl = this.fb.control('',{validators:[Validators.required], updateOn:"blur"});
    valorFormControl = this.fb.control('',{validators:[Validators.required], updateOn:"blur"});
    categoriaFormControl = this.fb.control('',{validators:[Validators.required], updateOn:"blur"});



  constructor(private cadastroProdutos: CadastroProdutosService, private fb: FormBuilder, private cadastroProdutosService: CadastroProdutosService,
    private router: Router) {
    this.form = this.fb.group({
      tituloFormControl:this.tituloFormControl,
      descricaoFormControl:this.descricaoFormControl,
      imagemFormControl: this.imagemFormControl,
      valorFormControl: this.valorFormControl,
      categoriaFormControl:this.categoriaFormControl




    })
   }

  ngOnInit(): void {
    
  }

  salvar(){
    if(this.form.valid){
      this.cadastroProduto = new CadastroProdutos();
      this.cadastroProduto.titulo = this.tituloFormControl.value;
      this.cadastroProduto.descricao = this.descricaoFormControl.value;
      this.cadastroProduto.imagem = this.imagemFormControl.value;
      this.cadastroProduto.valor = this.valorFormControl.value;
      this.cadastroProduto.categoria = this.tituloFormControl.value;
      this.cadastroProdutosService.post(this.cadastroProduto).subscribe(()=>{
        this.router.navigate(["/home"]);
      })
      
    } else{
      alert("Dados preenchidos de forma Incorreta.")
    }
  }

}
