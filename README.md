# BAMAZON

## Overview

This program uses node, JS and MySQL and NPM's like mysql and inquirer.

The program is meant to simulate a storefront that stores product information in a MySQL database that includes:

* ID
* Name
* Department
* Quantity in Stock
* Price

## Interaction
The app follows these steps:

1. The app lists the products available and includes:
  a. Item Id
  b. Product Name
  c. Product Department
  d. Price

2. The app asks user to enter the id of the product they would like to purchase.
3. The app then asks for the amount of that product they would like to purchase.
4. If the amount the user requests exceeds the amount available in stock, the app indicates there is not enough in stock to fulfill the order and asks them to choose again.
5. If the amount they request is available, they get a confirmation that the purchase is complete and lets the user know how much the total cost is.
6. The amount ordered is simultaneously subtracted from the quantity in stock.
7. The program then exits.

## Written by David Calderon
