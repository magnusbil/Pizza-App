# Pizza-App
This application takes in a pizza order and then saves it to a local database

# completeOrder
This function is called when a user completes their order. It calls addOrder to call the Web Api endpoint which inserts the order into the database.

# addOrder
Uses $resource to call Web Api Post endpoint 

# getAllOrders
Uses $resource to call Web Api GET endpoint, returns all the current orders in Descending order


# Backend:
- Asp.Net MVC and Web Api 2.0
- Entity Framework

# Front-End:
- Angular.js
- Bootstrap, HTML, CSS

# Database:
- SQL Express
- MS SQL Server Management Studio
