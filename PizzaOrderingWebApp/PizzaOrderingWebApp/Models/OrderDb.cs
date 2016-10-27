using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace PizzaOrderingWebApp.Models
{
    public class OrderDb : DbContext
    {
        public DbSet<Order> orders { get; set; }
    }
}