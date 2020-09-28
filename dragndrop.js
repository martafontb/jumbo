//draggable
window.onload = function() {
  //select the thing we wanna drag
  var printer = document.getElementById('printer');

//listen to the touchmove event, every time it fires, grab the location of the touch
// then assign it to photos

printer.addEventListener('touchmove', function(ev){
  //grab the location of the touch
  var touchLocation = ev.targetTouches[0];

  //assign photos new coordinates based on the touch
    printer.style.left = touchLocation.pageX + 'px';
    printer.style.top = touchLocation.pageY + 'px';
})

printer.addEventListener('touchend', function(ev){


  //current photos position when dropped

  var x = parseInt (printer.style.left);
  var y = parseInt (printer.style.top);

  // check to see if that position meets our constrains
if (x < 400 || x > 800) {

printer.style.left = '800px';
printer.style.top = '400px'
}

if ( y < 3153 || y > 2589) {

  printer.style.left = '800px';
  printer.style.top = '400px'
}

})

}

document.onmousemove = function(e) {
  var x = e.pageX;
  var y = e.pageY;
  console.log("X is"+x+"and Y is" +y);


};
