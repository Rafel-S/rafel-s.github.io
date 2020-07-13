var popout = document.getElementById("popout");
var closeButton = document.getElementById("close-popout");
var image = document.getElementById("variable-image");

function currentImage(source) {
  popout.style.display = "block";
  image.src =  source;
}

closeButton.onclick = function() {
  popout.style.display = "none";
}
