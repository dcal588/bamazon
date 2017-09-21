# BAMAZON

## Overview

This program uses node, JS and MySQL and NPM's like mysql and inquirer.

The program is meant to simulate a storefront that stores product information in a MySQL Table that includes:

* ID
* Name
* Department
* Quanitity in Stock
* Price

## Interaction
The app follows these steps:

1. The app lists the products available and includes:
  a. Item Id
  b. Product Name
  c. Product Department
  d. Price

2. The app asks user to enter the id of the product they would like to purchase.
3. The app then aks for the amount of that product they would like to purchase.
4. If the amount the user requests exceeds the amount available in stock, the app indicates there is not enough in stock to fullfill the order and asks them to choose again.
5. If the amount they request is available, they get a confirmation that the purchase is complete and lets the user know how much it cost.
6. The amount ordered is simulataneously subtratced from the quanitity in stock.
7. The program then exits.

## Written by David Calderon
