using EcommerceFullStack.Context;
using EcommerceFullStack.Entity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommerceFullStack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CadastroUsuarioMasterController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get()
        {
            using (MyContext ctx = new MyContext())
            {
                return Ok(ctx.UsuarioMasters.ToList());
            }
        }

        [HttpGet("{id}")]
        public ActionResult GetPeloId(int id)
        {
            using (MyContext ctx = new MyContext())
            {
                CadastroUsuarioMaster usuarioM = ctx.UsuarioMasters.Where(c => c.Id.Equals(id)).FirstOrDefault();

                if (usuarioM == null)
                    return NotFound();

                return Ok(usuarioM);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            using (MyContext ctx = new MyContext())
            {
                CadastroUsuarioMaster usuarioM = ctx.UsuarioMasters.Where(c => c.Id.Equals(id)).FirstOrDefault();

                if (usuarioM == null)
                    return NotFound();

                ctx.UsuarioMasters.Remove(usuarioM);
                ctx.SaveChanges();
            }
            return Ok();
        }

        [HttpPost]
        public ActionResult Post(CadastroUsuarioMaster usuarioM)
        {
            using (MyContext ctx = new MyContext())
            {
                ctx.UsuarioMasters.Add(usuarioM);
                ctx.SaveChanges();
            }
            return Ok(usuarioM);
        }
        [HttpPost("login")]

        public ActionResult Login (CadastroUsuarioMaster cadastroUsuarioMaster)
        {
            using(MyContext ctx=new MyContext())
            {
                CadastroUsuarioMaster usuario = ctx.UsuarioMasters.Where(u => u.Email.Equals(cadastroUsuarioMaster.Email) && u.Senha.Equals(cadastroUsuarioMaster.Senha)).FirstOrDefault();
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
        public ActionResult Put(CadastroUsuarioMaster usuarioM)
        {
            using (MyContext ctx = new MyContext())
            {
                ctx.UsuarioMasters.Update(usuarioM);
                ctx.SaveChanges();
            }
            return Ok(usuarioM);
        }
    }
}
    

