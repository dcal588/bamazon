var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',

    password: 'Insecure',
    database: 'bamazon',
});
connection.query("SELECT * FROM products", function(err, res) {
	for (var i = 0; i < res.length; i++) {
		console.log("Item ID: "+res[i].item_id+ " | Product Name: " +res[i].product_name + " | Price: " + res[i].price);
	}
	chooseItem(res);
});

function chooseItem (res) {
	inquirer.prompt([
  	{
  		type: "input",
    	name: "itemchoice",
    	message: "Please enter the ID of the item you would like to purchase."
  	},
  	{
  		type: "input",
    	name: "amount",
    	message: "How many would you like?"
  	}	
  ])
  .then(function(inquirerResponse) {
  	var query = "SELECT item_id, product_name, price, stock_quantity FROM products WHERE ?";
    connection.query(query, { item_id: inquirerResponse.itemchoice }, function(err, res) {
      if(res[0].stock_quantity>parseInt(inquirerResponse.amount)) {
      	connection.query("UPDATE products SET ? WHERE ?",
      	  [
            {
              stock_quantity: res[0].stock_quantity - inquirerResponse.amount
            },
            {
              item_id: inquirerResponse.itemchoice
            }
        	],
        );
        var total = res[0].price*inquirerResponse.amount;
        console.log("Your order was successful! Thank you! Your total for this order is: $"+ total);
         connection.end();
      }
      else {
        console.log("Sorry, we do not have enough in stock to fullfill your order.");
        chooseItem();
      }
    });
	});
};
