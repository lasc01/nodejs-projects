const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = 2800;

app.use(bodyParser.urlencoded({ extended : true }));

app.get("/", function(req,res){
	res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
	
	var value1 = Number(req.body.weight);

	var value2 = Number(req.body.height);

	var calc = value1 / (value2 * value2);

	var result = calc.toFixed(2);

	if(result <= 18){
	res.send("Hello, your BMI is " + result + ". You are underweight")
	} else if(result >= 18 && result <= 24){
	res.send("Hello, your BMI is " + result + ". You are normal weight")
	}else if(result >= 25 && result <= 54){   
        res.send("Hello, your BMI is " + result + ". You are overweight")
	}else{
	 res.send("Hello, your BMI is " + result + ". You are obessed")
	}
});

app.listen(port, function(){
	console.log("Server 2800 running");
});
