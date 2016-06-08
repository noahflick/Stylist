# $tylist

## Summary
The idea behind $tylist is to have a centralized hub for hairstylists and other beauty professionals to handle appointments, client accounts, products & services, and track revenues/expenses.

Beginning with appointment scheduling, Users create an account as a stylist or a client, and can create appointments accordingly.

Users can log in, see all upcoming appointments, and create/edit/delete (CRUD functions) appointments, with the aid of a date-time picker. Each appointment must have one stylist and one client. 
The basic (current) site contains the following models/relationships:

![ERD](stylist-ERD.png)

## Technologies Used

$tylist is built with the MEAN stack: MongoDB/Mongoose, Express, Angular.js, and Node.js. Twitter Bootstrap is used for styling with CSS. Token Auth is implemented via JSON Web Token (JWT). 

## Installation/Startup instructions
To use, just follow this link and sign up (hosted on Heroku): https://stylistpro.herokuapp.com

##Unsolved Problems:

The current state of the app is a basic appointment scheduler and a proof of concept for the full suite of functionality.

Planned features:
As mentioned above, the goal is to have a full-featured hub for beauty professionals. Stylists will have access to:
- product/service database
- client account records/history
- calendar views / booking "slots" (cannot double-book)
- revenue tracking - automated recording of paid appointments 
...and more
