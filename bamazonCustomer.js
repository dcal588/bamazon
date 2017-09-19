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
  	var query = "SELECT item_id, product_name, price FROM products WHERE ?";
    connection.query(query, { item_id: inquirerResponse.itemchoice }, function(err, res) {
      	console.log("smile check");
		});
	});
};
