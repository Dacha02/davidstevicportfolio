//Kada skrolujemo do odrejene visine header dobije drugu boju
function scroll() {
  var el = document.getElementById("sh");
  if (window.pageYOffset >= 100) {
    el.style.backgroundColor = "#111214";
  }
  if (window.pageYOffset < 100) {
    el.style.backgroundColor = "transparent";
  }
}
//Prevlacenje
var p = document.getElementById("holding");
function init() {
  p.removeEventListener("click", init, true);
  p.className = p.className + " resizable";
  var resizer = document.createElement("div");
  resizer.className = "resizer";
  p.appendChild(resizer);
  resizer.addEventListener("mousedown", initDrag, false);
}
init();

var startX, startY, startWidth, startHeight;

function initDrag(e) {
  startX = e.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
  document.documentElement.addEventListener("mousemove", doDrag, false);
  document.documentElement.addEventListener("mouseup", stopDrag, true);
}

//Uzimanje sirine
function doDrag(e) {
  p.style.width = startWidth + e.clientX - startX + "px";
}
//Kada se prestane sa prevlacenjem
function stopDrag(e) {
  document.documentElement.removeEventListener("mousemove", doDrag, false);
  document.documentElement.removeEventListener("mouseup", stopDrag, true);
}
