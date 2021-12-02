import { DeclarationListEmitMode } from "@angular/compiler";
import { CadastroEndereco } from "./cadastro-endereco.model";

export class CadastroCliente {
    id!:number;
    nome !:string;
    cpf !:string;
    dataNascimento !:Date;
    email!: string;
    senha !: string;
    perfil !:string;
    endereco !: CadastroEndereco;


}