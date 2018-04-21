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
	
	

function checkQuantity(){
	connection.query("SELECT * FROM products WHERE item_id=?", [inputID], 
		function(err, res){
			if (err)
				return console.log(err);
	
			
		
				for (let i = 0; i < res.length; i++){
						var product = res[i];
						console.log("It looks like you want to buy " + inputQuantity + " " + product.product_name);
						
						var left=product.stock_quantity;
						
						
					}
					
				if (left >= inputQuantity){
					console.log("You're in luck! We have enough for you!");
					var updatedQuantity = left-inputQuantity;
					
					
					var query=connection.query(
						"UPDATE products SET ? WHERE ?", [{
						stock_quantity: updatedQuantity
						},{
						item_id: inputID
					}],
					function(err, res){
						
						console.log("Your total is $" + product.price * inputQuantity);
					}
					)

					
					

				}else{
					console.log("Unfortunately we only have " + product.stock_quantity + " left.")
					}		
		})
}
		
checkQuantity();

});













