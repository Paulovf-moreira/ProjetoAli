import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroCliente } from '../models/cadastro-cliente.model';
import { CadastroUsuarioMaster } from '../models/cadastro-usuario-master.model';
import { CadastroClienteService } from '../services/cadastro-cliente.service';
import { CadastroUsuarioMasterService } from '../services/cadastro-usuario-master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  emailFormControl = this.fb.control('',{validators:[Validators.required], updateOn: "blur"})
  senhaFormControl = this.fb.control('', {validators:[Validators.required], updateOn: 'blur'});

  constructor(private cadastroUsuarioMasterService: CadastroUsuarioMasterService, private cadastroClienteService: CadastroClienteService, private Router: Router, private fb: FormBuilder) { 
    this.form = this.fb.group({

      emailFormControl: this.emailFormControl,
      senhaFormControl: this.emailFormControl

    })
  }

  ngOnInit(): void {
  }

  logar(){
    if(this.form.valid){
      let cadastroUsuarioMaster: CadastroUsuarioMaster = new CadastroUsuarioMaster();
      cadastroUsuarioMaster.email = this.emailFormControl.value;
      cadastroUsuarioMaster.senha = this.senhaFormControl.value;
      this.cadastroUsuarioMasterService.login(cadastroUsuarioMaster).subscribe((cadastroUsuarioMasterIn: CadastroUsuarioMaster)=>{
        this.cadastroUsuarioMasterService.usuarioLogado = cadastroUsuarioMasterIn;
        this.Router.navigate(["/"]);
      }, (erro: any)=>{
        let cadastroCliente: CadastroCliente = new CadastroCliente();
        cadastroCliente.email = this.emailFormControl.value;
        cadastroCliente.senha = this.senhaFormControl.value;
        this.cadastroClienteService.login(cadastroCliente).subscribe((cadastroCliente: CadastroCliente)=>{
          this.cadastroClienteService.cadastroCliente = cadastroCliente;
          this.Router.navigate(["/"]);
        }, (error)=>{
          alert("Email ou senha invalido")
        }
        )
      }
      )
    }

  }

}
