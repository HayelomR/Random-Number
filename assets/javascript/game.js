//player should guess a number
//there will be four crystals displayed on the page. that will generat a  random number 1-12
//when crystals clicked they will add a specific amount of points
//player when total score == randomnumber 
var wins = 0;//number of wins
var losses = 0;//number of loses
var randomNumber = 0;// random # that will be generated from 19 to 120
var blue = 0;// value of blue crystal
var green = 0;// value of green crystal
var red = 0; // value of red crystal
var yellow = 0;//value of yellow crystal
var userGuess = 0;// Numbers that will be generated from crystals
// lets create a random number that will generate betwen 19 & 120. this will be guessed by the player.
var randomNumber = Math.floor((Math.random()* 120) + 19);
//console.log(randomNumber);
//lets create a random number that will be generated by the crystals
var blue = Math.floor((Math.random()* 12) + 1);// create a random number for blue crystal
//console.log(blue);
var green = Math.floor((Math.random()* 12) + 1);// create a random number for green  crystal
//console.log(green);
var red = Math.floor((Math.random()* 12) + 1);// create a random number for red  crystal
//console.log(blue);
var yellow = Math.floor((Math.random()* 12) + 1);// create a random number for yellow crystal
//console.log(yellow);

function initalizeGame (){
	var randomNumber =Math.floor(Math.random()*120+19);
	blue = Math.floor(Math.random()*12+1);
	green = Math.floor(Math.random()*12+1);
	red= Math.floor(Math.random()*12+1);
	yellow= Math.floor(Math.random()*12+1);
	total= 0;
	}// ends the initalize game function 
	
function =  
	$(document).ready(function(){

		$("#blue").on("click", function(){
			userGuess = userGuess + blue;
			console.log("userGuess");
		})

		$("#red").on("click", function(){
			userGuess = userGuess + red;

		})

		$('#yellow').on("click", function(){

			userGuess = userGuess + yellow;	

		})

		$('#green').on("click", function(){

			userGuess = userGuess + green;
		})


 if (randomNumber == userGuess){
		      wins ++;
		      console.log(wins)
		      $("#crystals").empty();
		     initalizeGame()();
		        
		    } else ( randomnumber != userGuess){
		        losses ++;
		        console.log(losses)
		        $("#crystals").empty();
		        initalizeGame()();
		    }


	});









