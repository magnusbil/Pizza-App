namespace PizzaOrderingWebApp.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<PizzaOrderingWebApp.Models.OrderDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(PizzaOrderingWebApp.Models.OrderDb context)
        {

        }
    }
}
