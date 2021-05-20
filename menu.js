let menu_index = '<a href="index.html">home</a>'
let menu_projects = '<a id="projects" href="projects.html">projects</a>'
let menu_resume = '<a id="resume" href="resume.html">resume</a>'

let menu = menu_index + menu_projects + menu_resume

// document.getElementById("menu").innerHTML = menu

// underscore animation in header
underscore = document.getElementById("underscore")

setInterval(function(){
  changeVisible()
}, 800);

visible = 1
function changeVisible() {
  if (visible == 0) {
    // console.log("visible")
    underscore.style.visibility = "visible"
    visible = 1
  }
  else {
    // console.log("hidden")
    underscore.style.visibility = "hidden"
    visible = 0
  }
}
