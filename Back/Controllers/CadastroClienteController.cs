using EcommerceFullStack.Context;
using EcommerceFullStack.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceFullStack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CadastroClienteController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get()
        {
            using (MyContext ctx = new MyContext())
            {
                return Ok(ctx.Clientes.ToList());
            }
        }

        [HttpGet("{id}")]
        public ActionResult GetPeloId(int id)
        {
            using (MyContext ctx = new MyContext())
            {
               CadastroCliente cliente = ctx.Clientes.Where(c => c.Id.Equals(id)).FirstOrDefault();

                if (cliente == null)
                    return NotFound();

                return Ok(cliente);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            using (MyContext ctx = new MyContext())
            {
                CadastroCliente cliente = ctx.Clientes.Where(c => c.Id.Equals(id)).FirstOrDefault();

                if (cliente == null)
                    return NotFound();

                ctx.Clientes.Remove(cliente);
                ctx.SaveChanges();
            }
            return Ok();
        }

        [HttpPost]
        public ActionResult Post(CadastroCliente cliente)
        {
            using (MyContext ctx = new MyContext())
            {
                ctx.Clientes.Add(cliente);
                ctx.SaveChanges();
            }
            return Ok(cliente);
        }
        [HttpPost("login")]
        public ActionResult Login(CadastroCliente cliente)
        {
            using (MyContext ctx = new MyContext())
            {
                CadastroCliente usuario = ctx.Clientes.Where(u => u.Email.Equals(cliente.Email) && u.Senha.Equals(cliente.Senha)).FirstOrDefault();

                if (usuario == null)
                    return NotFound();
                else
                {
                    usuario.Senha = "";
                    return Ok(usuario);
                }
            }
        }

        [HttpPut]
        public ActionResult Put(CadastroCliente cliente)
        {
            using (MyContext ctx = new MyContext())
            {
                ctx.Clientes.Update(cliente);
                ctx.SaveChanges();
            }
            return Ok(cliente);
        }
    }
}
