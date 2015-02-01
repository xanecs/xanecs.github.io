//document.addEventListener("ready", function () {
  var toggle = document.getElementById("nav-toggle");
  var navbar = document.getElementById("nav-top");
  var open = false;
  toggle.addEventListener("click", function () {
    open = !open;
    navbar.className = open ? "navbar open" : "navbar";
  });
//});
