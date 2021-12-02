using EcommerceFullStack.Entity;

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceFullStack.Context
{
    public class MyContext : DbContext
    {
        public DbSet<CadastroCliente> Clientes { get; set; }
        public DbSet<CadastroEndereco> Endereco { get; set; }
        public DbSet<CadastroProdutos> Produtos { get; set; }
        public DbSet<CadastroUsuarioMaster> UsuarioMasters { get; set; }
        public DbSet<CompraProdutos> CompraProdutos { get; set; }
        public DbSet<CompraProdutos> Categoria { get; set; }
        public IEnumerable<object> Vendas { get; internal set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("data source=45.93.100.120,1433;initial catalog=FS12;persist security info=True;user id=FS12;password=121233;MultipleActiveResultSets=True;App=exeEf;");
        }

       /* protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<CadastroCliente>(new CadastroClienteMapping().Configure);
            builder.Entity<CadastroUsuarioMaster>(new CadastroUsuarioMasterMapping().Configure);
            builder.Entity<CadastroCategoria>(new CadastroCategoriaMapping().Configure);
            builder.Entity<CadastroProdutos>(new CadastroProdutosMapping().Configure);
        } */
        
    }
}
