using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using PizzaOrderingWebApp.Models;

namespace PizzaOrderingWebApp.ApiControllers
{
    [RoutePrefix("api")]
    public class OrdersController : ApiController
    {
        private OrderDb db = new OrderDb();

        // GET: api/Orders
        [HttpGet]
        [Route("Orders")]
        public IHttpActionResult Getorders()
        {
            return Ok(db.orders.OrderByDescending(x => x.OrderDate));
        }

        // POST: api/Orders
        [HttpPost]
        [Route("Orders")]
        [ResponseType(typeof(Order))]
        public async Task<IHttpActionResult> PostOrder(Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.orders.Add(order);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (OrderExists(order.OrderId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OrderExists(string id)
        {
            return db.orders.Count(e => e.OrderId == id) > 0;
        }
    }
}