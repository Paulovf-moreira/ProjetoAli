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
    public class CadastroEnderecoController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get()
        {
            using (MyContext ctx = new MyContext())
            {
                return Ok(ctx.Endereco.ToList());
            }
        }

        [HttpGet("{id}")]
        public ActionResult GetPeloId(int id)
        {
            using (MyContext ctx = new MyContext())
            {
                CadastroEndereco endereco = ctx.Endereco.Where(c => c.Id.Equals(id)).FirstOrDefault();

                if (endereco == null)
                    return NotFound();

                return Ok(endereco);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            using (MyContext ctx = new MyContext())
            {
                CadastroEndereco endereco = ctx.Endereco.Where(c => c.Id.Equals(id)).FirstOrDefault();

                if (endereco == null)
                    return NotFound();

                ctx.Endereco.Remove(endereco);
                ctx.SaveChanges();
            }
            return Ok();
        }

        [HttpPost]
        public ActionResult Post(CadastroEndereco endereco)
        {
            using (MyContext ctx = new MyContext())
            {
                ctx.Endereco.Add(endereco);
                ctx.SaveChanges();
            }
            return Ok(endereco);
        }

        [HttpPut]
        public ActionResult Put(CadastroEndereco endereco)
        {
            using (MyContext ctx = new MyContext())
            {
                ctx.Endereco.Update(endereco);
                ctx.SaveChanges();
            }
            return Ok(endereco);
        }
    }
}

    

