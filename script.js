/*var firstNumber = prompt("First Number Please");
var secondNumber = prompt("Second Number Please");

var total = (Number(firstNumber) + Number(secondNumber));
alert(total);

	{if (total <= 20) {alert("passed"); }

 else{alert("Something a little smaller?");
}
}

alert("Starting log in sequence")
*/
//FORM START
/*var submit = document.getElementById("submit");
var uname = document.getElementById("uname").value;
var psw = document.getElementById("psw").value;
*/

var stylechange = document.getElementById("stylechange");
var main = document.getElementById("main")

function check()
{
	if (document.getElementById("uname").value === database[0].username &&
		 document.getElementById("psw").value === database[0].password) {
			alert("All checks out, Nace..");} else {alert("Somethings not right..");}

}
/*{
	if (document.getElementById("uname").value === database[0].username &&
		 document.getElementById("psw").value === database[0].password )  {
			alert("All checks out, Nace..") ;} else {alert("Somethings not right.."); }


submit.addEventListener("click", function(){  
	check();
}
)



;*/

stylechange.addEventListener("click", function() { changeBackground(); });

function changeBackground(color) {
   if (document.body.style.background === "black") {document.body.style.background = "white"; document.getElementById("main").style.color = "black";}
   	else {document.body.style.background = "black"; document.getElementById("main").style.color = "white"};

};


/*
;

/*
checkByKeyPress.addEventListener("keypress", checkByKeyPress);
checkByKeyPress();}
*/
//FORM END


//DATABASE()/*
//var database = [{
//	username: "daley112",
//	password: "password123",}];
//DATABASE END
;
