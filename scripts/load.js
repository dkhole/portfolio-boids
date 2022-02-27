document.documentElement.onload = function () {
  document.getElementById("loader").style.display = "block";
};

window.onload = function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("nav-circles").style.display = "block";
};
