using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PizzaOrderingWebApp.Models
{
    [Table("Orders")]
    public class Order
    {
        [Key]
        public string orderId { get; set; }
        public string PhoneNumber { get; set; }
        public string Name { get; set; }
        public DateTime DeliveryDate { get; set; }
        public int PizzasOrdered { get; set; }
    }
}