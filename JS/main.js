var SlideCount = 0;
SlideShow();

function SlideShow() {
  var i;
  var Slides = document.getElementsByClassName("main");
  var Dots = document.getElementsByClassName("dot");
  for (i = 0; i < Slides.length; i++) {
    Slides[i].style.display = "none";  
  }
  SlideCount++;
  if (SlideCount > Slides.length) {SlideCount= 1}    
  for (i = 0; i < Dots.length; i++) {
    Dots[i].className = Dots[i].className.replace(" active", "");
  }
  Slides[SlideCount-1].style.display = "block";  
  Dots[SlideCount-1].className += " active";
  setTimeout(SlideShow, 4000); // Change image every 2 seconds
}

var siteWidth = 1280;
var scale = screen.width /siteWidth

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');
