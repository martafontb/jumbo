// collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// colour picker

// Reference the color shape that was drawn over the image
const overlay = document.getElementById("product-shape");

// Click on a color

var el = document.getElementsByClassName("color");
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor;
}

function changeColor(e) {
  // get the hex color
  let hex = e.target.getAttribute("data-hex");
  // set the hex color
  overlay.style.fill = hex;
}


//burger menu
const navContent = document.querySelector('.nav__content');
const nav = document.querySelector('.nav');
const extraBackground = document.querySelector('.nav__extra-background');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav__links a');
const html = document.querySelector('html');


//Setting the initial states
gsap.set([extraBackground, nav], { height: '0%', skewY: 5 });
gsap.set([navLinks], { y: -20, autoAlpha: 0 });

const hamburgerAnimation = hamburger => {
    const tl = gsap.timeline();
    const lineOne = hamburger.children[0]
    const lineTwo = hamburger.children[1]
    const lineThree = hamburger.children[2]

    tl.to(lineOne, {
        duration: 0.2,
        rotation: '-45deg',
        x: '-9px',
        y: '6px',
    }).to(lineTwo, {
        duration: 0.2,
        opacity: 0,
    }).to(lineThree, {
        duration: 0.2,
        rotation: '45deg',
        x: '-11px',
        y: '-8px',
    }, '-=0.2')

    return tl;
}

const staggerReveal = nodes => {
    const tl = gsap.timeline();

    tl.to(nodes, {
        duration: 1,
        ease: 'power3.inOut',
        transformOrigin: 'top right',
        height: '100%',
        minHeight: '100%',
        skewY: 0,
        stagger: {
            amount: 0.1,
        },
    });

    return tl;
};



const revealMenuItems = links => {
    const tl = gsap.timeline();

    tl.to(links, {
        duration: 0.8,
        autoAlpha: 1,
        y: 0,
        stagger: {
            amount: 0.1,
        },
    });

    return tl;
};

const master = gsap.timeline({ paused: true, reversed: true });
master
    .add(staggerReveal([extraBackground, nav]))
    .add(revealMenuItems(navLinks), '-=0.5')


hamburger.addEventListener('click', () => {
    master.reversed() ? master.play() : master.reverse();
    hamburger.classList.toggle('hamburger__open');
});


//Scrolling On Rotate Element(Image)

var $reg = $('.reg-mark');
var $win = $(window);
$win.on('scroll', function(){
  var top = $win.scrollTop();
  $reg.css('transform', 'rotate('+ top +'deg)');
  console.log('Amazing Scrolling!');
});



// draggable random
$(function() {
  $('.draggable').draggable()
})

		function randomFromTo(from, to){
			return Math.floor(Math.random() * (to - from + 1) + from);
		}
  
		function moveRandom(e) {
      
			/* get container position and size
			 * -- access method : cPos.top and cPos.left */
			var cPos = $('.container').offset();
			var cHeight = $('.container').height();
			var cWidth = $('.container').width();
			
			// get box padding (assume all padding have same value)
			var pad = parseInt($('.container').css('padding-top').replace('px', ''));
			
			// get movable box size
			var bHeight = e.height();
			var bWidth = e.width();
			
			// set maximum position
			maxY = cPos.top + cHeight - bHeight - pad;
			maxX = cPos.left + cWidth - bWidth - pad;
			
			// set minimum position
			minY = cPos.top + pad;
			minX = cPos.left + pad;
			
			// set new position			
			newY = randomFromTo(minY, maxY);
			newX = randomFromTo(minX, maxX);
			e.animate({
				top: newY,
				left: newX
				}, 0);
		}

$('.draggable').each(function(){
   moveRandom($(this));
});



// Select draggable elements
var draggableElems = document.querySelectorAll('.draggable')
var draggies = []
for (var i = 0, len = draggableElems.length; i < len; i++) {
  var draggableElem = draggableElems[i]
  var draggie = new Draggabilly(draggableElem, {
    // contain to parent element
    containment: true
  })
  draggies.push(draggie)
}
