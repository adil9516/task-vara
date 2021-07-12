document.getElementById("next").addEventListener("click", function () {
  document.getElementById("cplus").innerHTML = "-";
  document.getElementById("expandmain").style.display = "block";
});
document.getElementById("prev").addEventListener("click", function () {
  document.getElementById("cplus").innerHTML = "+";
  document.getElementById("expandmain").style.display = "none";
});
document.getElementById("pplus").addEventListener("click", function () {
  document.getElementById("pplus").innerHTML = "-";
  document.getElementById("expandmainp").style.display = "block";
});
