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
  //   if (parseInt(inquirerResponse.itemchoice) === res[0].item_id) {
		// 	console.log("smile check");
		// }
		// else {
		// 	console.log("boo");
		// }
//     if (inquirerResponse.action === "Search for Duplicates") {
// 			searchDuplicates();
// 		}
// 		if (inquirerResponse.action === "Search by Year Range") {
// 			searchYearRange();
// 		}
// 		if (inquirerResponse.action === "Search for Song") {
// 			searchSong();
// 		}
// 	});
// };
// function searchArtist() {
// 	inquirer.prompt([
//   	{
//   		type: "input",
//     	name: "artistrequest",
//     	message: "What artist are you looking for?"
//   	}
//   ])
//   .then(function(inquirerResponse) {
// 		connection.query("SELECT * FROM Top5000 WHERE artist = ?", [inquirerResponse.artistrequest], function(err, res) {
// 			for (var i = 0; i < res.length; i++) {
// 				console.log("Position: "+res[i].place+ " | Artist: " +res[i].artist + " | Title: " + res[i].title + " | Release Year: " + res[i].releaseyear+ " | Total Popularity: " + res[i].totalpopularity);
// 			}
// 		});
// 	});
// };
// function searchDuplicates() {
// 	connection.query("SELECT artist FROM Top5000 GROUP BY artist HAVING COUNT(*) > 1", function(err, res) {
// 		for (var i = 0; i < res.length; i++) {
// 				console.log(res[i].artist);
// 		}
// 	});
// };
// function bidChoices(db) {
// 	inquirer.prompt([
//   	{
//   		type: "list",
//     	name: "action",
//     	message: "What would you like to bid on",
//     	choices: db
//   	}
//   ])
//  };

// chooseAction();
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id" + connection.threadId);
//   queryDanceSongs();
// });

// function queryAllSongs () {
// 		connection.query("SELECT * FROM music", function(err, res) {
// 			for (var i = 0; i < res.length; i++) {
// 				console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | ");
// 			}
// 			console.log("-----------------------------------------------");
// 		});
// }
// function queryDanceSongs () {
// 	inquirer.prompt([
//   {
//     name: "genre",
//     message: "What genre are you searching for?"
//   }
// ]).then(function(answers) {
// 	var query = connection.query("SELECT * FROM music WHERE genre=?", [answers.genre],
// 	 function(err, res) {
// 			for (var i = 0; i < res.length; i++) {
// 				console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | ");
// 			}
// 		});
// });
//   console.log(query.sql);
// }
