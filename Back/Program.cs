using EcommerceFullStack.Context;
using EcommerceFullStack.Entity;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceFullStack
{
    public class Program
    {
        public static void Main(string[] args)
        {
            using (MyContext ctx = new MyContext())
            {
                /* ctx.Database.EnsureCreated();
                  CadastroCliente cli = new CadastroCliente();
                  cli.Nome = "Thiago";
                  ctx.Clientes.Add(cli);
                  ctx.SaveChanges();

                  CadastroCliente client = new CadastroCliente();
                  client.Nome = "Chris";
                  ctx.Clientes.Add(client);
                  ctx.SaveChanges(); */
                
            }
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}