using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceFullStack.Entity
{
    public class CadastroProdutos
    {
        public int Id { get; set; }
        public string Titulo { get; set; } 
        public string Descricao { get; set; }
        public string Imagem { get; set; }
        public decimal Valor { get; set; }
        public string Categoria { get; set; }
       
       // public string NomeCategoria { get; set; }
        /* descobrir se o campo "categoria" deve ser "enum" */
        // [ForeignKey("CadastroCategoria")]
        // public int CadastroCategoriaId { get; set; }
    }
}
