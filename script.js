
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
   if (document.body.style.background === "white") {document.body.style.background = "black"; document.getElementById("main").style.color = "white";}
   	else {document.body.style.background = "white"; document.getElementById("main").style.color = "black"};

};

//clock

function pageClock() {
//GET THE TIME
var currentTime = new Date ( );
var currentHours = currentTime.getHours ();
var currentMinutes = currentTime.getMinutes ();
var currentSeconds = currentTime.getSeconds ();
//CORRECT THE FORMAT
currentMinutes = ( currentMinutes < 10 ? "0" : "") + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "") + currentSeconds;
var time = currentHours + ":" + currentMinutes + ":" + currentSeconds;
//DOM SELECTOR
var clock1 = document.getElementById("clock1");
//EXECUTION
	clock1.firstChild.nodeValue = time;
}


var menuButton = document.querySelector("#menuButton");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuButton.addEventListener("click", function(){
     // forEach is not supported in IE11
  // activeElements.forEach(function(e){
  //     e.classList.toggle("active");
  // });
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
})