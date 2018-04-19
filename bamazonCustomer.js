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
	connection.end();
});

function showProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err)
            return console.log(err);

        console.log(res);
    })
}

showProducts();

 
function processAnswers(answers){
	console.log("Answers: ", answers)

	var questions = [
{
	message: "What's the id number of the item you would like to buy?",
	type: "input",
	name: "idNumber"
}];

inquirer.prompt(questions,processAnswers);
};
 
processAnswers();










