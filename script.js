//TARGETS FOR NAVIGATION LINKS
const home = document.getElementById('home');
const about = document.getElementById('about');
const blog = document.getElementById('blog');
const projects = document.getElementById('projects');
const mainWindow = document.getElementById('mainWindow');
const home2 = document.getElementById('home2')
const about2 = document.getElementById('about2')
const blog2 = document.getElementById('blog2')
const projects2 = document.getElementById('projects2')
var stylechange = document.getElementById("stylechange");
var main = document.getElementById("main")
//HTML VARIABLES FOR EACH PAGE 
const loadHome = () => {
  mainWindow.innerHTML = indexHTML;
}
const loadHome2 = () =>  {
  mainWindow.innerHTML = indexHTML;
menuToggle();
}
const loadAbout = () => {
  mainWindow.innerHTML = aboutHTML;
}
const loadAbout2 = () => {
  mainWindow.innerHTML = aboutHTML;
  menuToggle();
}
const loadBlog = () => {
  mainWindow.innerHTML = blogHTML;
}
const loadBlog2 = () => {
  mainWindow.innerHTML = blogHTML;
  menuToggle();
}
const loadProjects = () => {
  mainWindow.innerHTML = projectsHTML;
}
const loadProjects2 = () => {
  mainWindow.innerHTML = projectsHTML;
  menuToggle();
}
//NAV CLICK EVENTS

home.addEventListener('click' , loadHome);
home2.addEventListener('click', loadHome2);
about.addEventListener('click', loadAbout);
about2.addEventListener('click', loadAbout2)
blog.addEventListener('click' ,  loadBlog);
blog2.addEventListener('click', loadBlog2);
projects.addEventListener('click', loadProjects);
projects2.addEventListener('click', loadProjects2);
//HAMBURGER MENU FOR SMALL SCREEN RESOLUTIONS

const tester = () => {
  if (home2) {
    alert('it works')
  }
}
const menuToggle = () => {
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
        }};
var menuButton = document.querySelector("#menuButton");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuButton.addEventListener("click", menuToggle);
     // forEach is not supported in IE11
  // activeElements.forEach(function(e){
  //     e.classList.toggle("active");
  // });
// STYLE CHANGER BUTTON
stylechange.addEventListener("click", function() {
 changeBackground();
 });
console.log(activeElements.length)
function changeBackground(color) {
   if (document.body.style.background === "white") {
    document.body.style.background = "black";
    document.getElementById("main").style.color = "white";
  }
    else {document.body.style.background = "white";
     document.getElementById("main").style.color = "black"
   };
};
//RAW HTML FOR PAGES
const indexHTML = ` <div class="innercontent active-element">
        <div class="cover">
          <h1 class="daley">.daley</h1>
        </div>
        <div class="sandbox">
          <img class="html" src="html5.png" height="100px" width="100px">
          <img class="css" src="css3.png" height="100px" width="100px">
          <img class="js" class="play" src="jslogo.png" height="100px" width="100px">
        </div>
      </div>`;

const aboutHTML = `<div class="content active-element">
      <div class="blogpost">
        <div class="card">
          <h1>about me</h1>
        </div>
        <hr>
        <div class="article about">
          <img class="cliff" src="cliff.png" width="500px" height="500x">
          <p>I'm an <strong>aspiring Web Developer</strong> from Newquay, Cornwall UK. When I'm not coding,
           you'll find me studying new ways to fix coding challenges, drawing, surfing or skating.&nbsp;&nbsp;
          <span class="link" onclick='loadBlog()' document.getElementById('intro').focus('intro') "blogHTML#intro">Read more..</span></p>
          <div class="codes"> 
            <img src="jslogo.png"width="150px" height="150px">
            <img src="css3.png" width="150px" height="150px">
            <img src="html5.png" width="150px" height="150px">
          </div>
        </div>
      </div>
    </div>`

const blogHTML = `<div class="content active-element">
      <div class="blogpost">
        <h1>&lt;Hello World/&gt;</h1>
        <h1>my name is</h1>
        <div class="card">
          <h1>danny daley</h1>
        </div>
        <hr>
        <div class="article" id="intro">
          <img class="snow" src="snow.png" width="300px" height="300px">
          <p>I'm an <strong>aspiring Web Developer</strong> from Newquay, Cornwall UK, and I've hated my job
          for just over three years now. I currently work in a factory, fixing and maintaining mass production
          machinery that's well past its sell-by date and quite frankly, it's just the worst. Everythings busted yet expected to work like its fresh out of the box and in the end it's my ass if it needs replacement parts, and all with zero recognition of doing a great job. Don't get me wrong, I like that i get to solve problems and against all odds be able to get something running and working. But not like this, NOT LIKE THIS.  </p>
          <hr>
          <p>Fortunately enough for me, I happened upon Web Development, and I've finally found that thing that I want to do.
          But having said that, it does come with it's own problems. I'm not great at it, I said it, people all over the internet exclaim how easy it is to write code and create fantastic looking websites but truth be told, I think its pretty tough. At times its irritating, frustrating and sometimes it just doesnt seem to make any sense, but then it eventually clicks in your mind and you find the sense within it, and then it's very rewarding. I love it when it all comes together, and I'm putting everything I've got into learning the craft,<strong> I want to be able to call myself a professional one day.</strong></p>
          <p>This blog section of my website will feature anything that I think may be of interest, but primarily I'm going to try and stay on topic and post articles regarding Web Development, more specifically things I have struggled with and either figured out or found the answer to, I haven't come across many things in life more irritating than a footer that <strong>should</strong>, but won't, stick to the bottom of the page. Hopefully this will help somebody out there daunted by the simple things, that turn out to not be that simple!
        </div>
      </div>
    </div>`

const projectsHTML = `<div class="projects active-element">
      <div class="project">
        <h2><a href="https://dannydaley.github.io/captivedesign" target="_blank">Captive Design Studio</a></h2>
        <p>I had a great time working on the Captive Design Studio site, the use of strong fonts and powerful colors
        was an absolute must to pull this design off and it came out looking fantastic. Definitely learned a lot about making an impact from this one.</p>
        <a href="https://dannydaley.github.io/captivedesign" target="_blank"><img src="captive.png" width="100px" height="150px"></a>
      </div>
      <hr>
      <div class="project makki">
        <h2>
        <a href="https://dannydaley.github.io/makkioikui" target="_blank">Makkio Ikui</a></h2>
        <p>Inspired by the Kawaii japanese art style, of course this website was a lot of fun to make, a great use of color in the design really made it pop.
        It came with its challenges, but its hard to stay frustrated when you're working with these kind of images. </p>
        <a href="https://dannydaley.github.io/makkioikui" target="_blank"><img src="makki.png" height="200px"></a>
      </div>
    </div>
    </div>`
//PAGE FILL FOR INITIAL LOAD
mainWindow.innerHTML = indexHTML;



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

