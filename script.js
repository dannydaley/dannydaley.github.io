
var stylechange = document.getElementById("stylechange");
var main = document.getElementById("main")

function check()
{
	if (document.getElementById("uname").value === database[0].username &&
		 document.getElementById("psw").value === database[0].password) {
			alert("All checks out, Nace..");} else {alert("Somethings not right..");}

}

stylechange.addEventListener("click", function() { changeBackground(); });

function changeBackground(color) {
   if (document.body.style.background === "black") {document.body.style.background = "white"; document.getElementById("main").style.color = "black";}
   	else {document.body.style.background = "black"; document.getElementById("main").style.color = "white"};

};
