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
    public class CadastroProdutosController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get()
        {
            using (MyContext ctx = new MyContext())
            {
                return Ok(ctx.Produtos.ToList());
            }
        }

        [HttpGet("{id}")]
        public ActionResult GetPeloId(int id)
        {
            using (MyContext ctx = new MyContext())
            {
                CadastroProdutos produtos = ctx.Produtos.Where(c => c.Id.Equals(id)).FirstOrDefault();

                if (produtos == null)
                    return NotFound();

                return Ok(produtos);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            using (MyContext ctx = new MyContext())
            {
                CadastroProdutos produtos = ctx.Produtos.Where(c => c.Id.Equals(id)).FirstOrDefault();

                if (produtos == null)
                    return NotFound();

                ctx.Produtos.Remove(produtos);
                ctx.SaveChanges();
            }
            return Ok();
        }

        [HttpPost]
        public ActionResult Post(CadastroProdutos produtos)
        {
            using (MyContext ctx = new MyContext())
            {
                ctx.Produtos.Add(produtos);
                ctx.SaveChanges();
            }
            return Ok(produtos);
        }

        [HttpPut]
        public ActionResult Put(CadastroProdutos produtos)
        {
            using (MyContext ctx = new MyContext())
            {
                ctx.Produtos.Update(produtos);
                ctx.SaveChanges();
            }
            return Ok(produtos);
        }
    }
}


