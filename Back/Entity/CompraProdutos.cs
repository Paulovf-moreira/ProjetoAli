using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceFullStack.Entity
{
    public class CompraProdutos
    {
        public int Id { get; set; }
        public CadastroProdutos ListaProdutos { get; set; }
        public int Quantidade { get; set; }
        public CadastroProdutos Valor { get; set; }

    }
}
