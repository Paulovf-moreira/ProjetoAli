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
    public class CompraProdutosController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get()
        {
            using (MyContext ctx = new MyContext())
            {
                return Ok(ctx.CompraProdutos.ToList());
            }
        }

        [HttpGet("{id}")]
        public ActionResult GetPeloId(int id)
        {
            using (MyContext ctx = new MyContext())
            {
                CompraProdutos cprodutos = ctx.CompraProdutos.Where(c => c.Id.Equals(id)).FirstOrDefault();

                if (cprodutos == null)
                    return NotFound();

                return Ok(cprodutos);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            using (MyContext ctx = new MyContext())
            {
                CompraProdutos cprodutos = ctx.CompraProdutos.Where(c => c.Id.Equals(id)).FirstOrDefault();

                if (cprodutos == null)
                    return NotFound();

                ctx.CompraProdutos.Remove(cprodutos);
                ctx.SaveChanges();
            }
            return Ok();
        }

        [HttpPost]
        public ActionResult Post(CompraProdutos cprodutos)
        {
            using (MyContext ctx = new MyContext())
            {
                ctx.CompraProdutos.Add(cprodutos);
                ctx.SaveChanges();
            }
            return Ok(cprodutos);
        }

        [HttpPut]
        public ActionResult Put(CompraProdutos cprodutos)
        {
            using (MyContext ctx = new MyContext())
            {
                ctx.CompraProdutos.Update(cprodutos);
                ctx.SaveChanges();
            }
            return Ok(cprodutos);
        }
    }
}
    

