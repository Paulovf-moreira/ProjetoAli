import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroCliente } from '../models/cadastro-cliente.model';
import { CadastroEndereco } from '../models/cadastro-endereco.model';
import { CadastroClienteService } from '../services/cadastro-cliente.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  cadastroCliente:CadastroCliente = new CadastroCliente();

  form:FormGroup;

  nomeFormControl = this.fb.control('',{validators: [Validators.required], updateOn: "blur"});
  emailFormControl = this.fb.control('',{validators:[Validators.required], updateOn: "blur"});
  senhaFormControl = this.fb.control('',{validators:[Validators.required], updateOn:"blur"});
  dataDeNascimentoFormControl = this.fb.control('',{validators:[Validators.required], updateOn:"blur"});
  cpfFormControl = this.fb.control('',{validators:[Validators.required], updateOn:"blur"});
  ruaFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  numeroFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  complementoFormControl = this.fb.control('', { validators: [], updateOn: 'blur' });
  bairroFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cidadeFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cepFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });

  


  constructor(private cadastroClienteService: CadastroClienteService, private fb: FormBuilder, private cadastroEnderecoService: CadastroClienteService) { 

    this.form = this.fb.group({
      nomeFormControl : this.nomeFormControl,
      emailFormControl : this.emailFormControl,
      senhaFormControl : this.senhaFormControl,
      dataDeNascimentoFormControl : this.dataDeNascimentoFormControl,
      cpfFormControl : this.cpfFormControl,
      ruaFormControl: this.ruaFormControl,
      numeroFormControl: this.numeroFormControl,
      complementoFormControl: this.complementoFormControl,
      bairroFormControl: this.bairroFormControl,
      cidadeFormControl: this.cidadeFormControl,
      cepFormControl: this.cepFormControl
      

    })
  }

  ngOnInit(): void {
  }
  salvar(){
    if(this.form.valid){
      if(this.cadastroCliente == undefined || this.cadastroCliente==null)
        this.cadastroCliente = new CadastroCliente();
      this.cadastroCliente.nome = this.nomeFormControl.value;
      this.cadastroCliente.email = this.emailFormControl.value;
      this.cadastroCliente.senha = this.senhaFormControl.value;
      this.cadastroCliente.dataNascimento = this.dataDeNascimentoFormControl.value;
      this.cadastroCliente.cpf = this.cpfFormControl.value;
      if(this.cadastroCliente.endereco == undefined || this.cadastroCliente.endereco == null)
        this.cadastroCliente.endereco = new CadastroEndereco();
      this.cadastroCliente.endereco.bairro = this.bairroFormControl.value;
      this.cadastroCliente.endereco.cep = this.cepFormControl.value;
      this.cadastroCliente.endereco.cidade = this.cidadeFormControl.value;
      this.cadastroCliente.endereco.complemento = this.complementoFormControl.value;
      this.cadastroCliente.endereco.numero = this.numeroFormControl.value;
      this.cadastroCliente.endereco.rua = this.ruaFormControl.value;
    }
    /*console.log(JSON.stringify(this.cadastroCliente));
    //this.cadastroClienteService.post(this.cadastroCliente).subscribe(
      //Sucess
      //(cliente)=>{
        //this.cadastroCliente = cliente;
      /falha  
      }, (falha)=>{
        console.log(JSON.stringify(falha));*/
        if (this.cadastroCliente.id == undefined || this.cadastroCliente.id == 0)
        this.cadastroClienteService.post(this.cadastroCliente).subscribe(() => {

        });
      else
        this.cadastroClienteService.put(this.cadastroCliente).subscribe(() => {
      });

  }
}
