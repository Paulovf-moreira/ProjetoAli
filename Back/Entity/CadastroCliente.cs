using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceFullStack.Entity
{
    public class CadastroCliente
    {
        /*  public string Nome { get; set; }
          public string Cpf { get; set; }
          public  DateTime DataNasc { get; set; }
          public string Email { get; set; }
          public string Senha { get; set; }
          [ForeignKey("TipoPerfilEnum")]
          public string TipoPerfilId { get; set; }
         // public string TipoPerfil { get; set; }
          /*falta o campo "perfil" descubra como usar o enum e se ele deve ser usado aqui em "perfil" por exemplo*/
        public int Id { get; set; }
        public string Nome { get; set; }
        public string CPF { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public TipoPerfilEnum Perfil { get; set; }
        public CadastroEndereco Endereco { get; set; }
    }
}
