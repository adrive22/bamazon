var inquirer=require("inquirer");
var mysql=require("mysql");
var connection=mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password:"123",
	database: "bamazon"
	})

connection.connect(function(err){
	if (err){
		console.log(err);
	}
	console.log("connected as id" + connection.threadId);
	
});

function showProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err)
            return console.log(err);

        console.log(res);
    })
}

showProducts();

 
inquirer.prompt([

{
	type:"input",
	name:"whatProduct",
	message:"What is the id number of the product you would like to buy?"
},{
	type:"input",
	name:"howMany",
	message:"How many units would you like to buy?"
}

]).then(function(inquirerResponse){
	var inputID = inquirerResponse.whatProduct
	var inputQuantity = inquirerResponse.howMany
	console.log(inputID);
	console.log(inputQuantity);

function checkQuantity(){
	connection.query("SELECT * FROM products WHERE item_id=?", [inputID], 
		function(err, res){
			if (err)
				return console.log(err);
	
			console.log(res);
		
				for (let i = 0; i < res.length; i++){
						var product = res[i];
						console.log(product);
						console.log("Quantity: " + product.stock_quantity);
						var left=product.stock_quantity;
						console.log(left);
						
					}
					
				if (left >= inputQuantity){
					console.log("You're in luck! We have enough for you!");
					var updatedQuantity = left-inputQuantity;
					console.log("Updated Quantity: " + updatedQuantity);
					
					var query=connection.query(
						"UPDATE products SET ? WHERE ?", [{
						stock_quantity: updatedQuantity
						},{
						item_id: inputID
					}],
					function(err, res){
						
						console.log(res.affectedRows + "quantities updated!\n");
					}
					)
					

				}else{
					console.log("Unfortunately we only have " + product.stock_quantity + " left.")
					}		
		})
}
		
checkQuantity();

});













