

var numSquares = 6;
var colorList = generateRandomColors(numSquares) ;


var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor; 
var squares = document.querySelectorAll(".square");

var messageDisplay = document.querySelector("#message");
var head  = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() 
{
	for(var i =0;i<modeButtons.length;i++) 
	{
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy"? numSquares=3 :numSquares=6;
	


		reset();

		});
	}
	for(var i = 0 ;i<squares.length; i++) 

	{

	squares[i].style.background=colorList[i];
	squares[i].addEventListener("click",function(){
	var clickedColor = this.style.background;	

		if(clickedColor === pickedColor){
			messageDisplay.textContent="Correct" ; 
			changeColor(clickedColor);
			resetButton.textContent = "Play Again?"
			head.style.background = clickedColor;

		}
		else 
		{
			this.style.background="#232323";
			messageDisplay.textContent="Try again" ; 
		}
		});
}
}





function reset() 
{
		colorList = generateRandomColors(numSquares) ;
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor; 

	resetButton.textContent="New Colors";
	for(var i = 0 ;i<squares.length; i++) {
		if(colorList[i])
		{
				squares[i].style.display="block";
				squares[i].style.background=colorList[i];
		}
		else {

			squares[i].style.display= "none";
		}
	

	}
	head.style.background = "steelblue";
	messageDisplay.textContent="";
}

resetButton.addEventListener("click",function(){
//numSquares=6;
	reset();
});



function changeColor(color)
{
	for(var i = 0 ;i<squares.length; i++) 
	{
		squares[i].style.background=color;
	}

}
function pickColor()
{
	var i =Math.floor(Math.random(0,1)*colorList.length);
	console.log("picked "+colorList[i])
	return colorList[i];

}
function generateRandomColors(num) 
{
	var arr = []
	for(var i =0;i<num;i++) 
	{
		arr.push(randomColor());
	}

	return arr;
}
function  randomColor() 
{
	var r = Math.floor(Math.random(0,1) * 256);
	var g = Math.floor(Math.random(0,1) * 256);
	var b = Math.floor(Math.random(0,1) * 256);
	var ret = "rgb("+r+", "+g+", "+b+")" ; 
	return ret ; 
}
