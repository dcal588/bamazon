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
		});
