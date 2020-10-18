//image loading

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.10) {
      entry.target.classList.add("animate")
    } else {
      entry.target.classList.remove("animate")
    }
  })
}, {
  threshold: [0, 0.10, 0.9, 1]
})

const images = document.querySelectorAll('img');
images.forEach(image => {
  observer.observe(image)
})


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
const outputTag = document.querySelector("h5")

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
  outputTag.innerHTML = hex;
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
});




       $(document).ready(function () {
           $(document).on("scroll", onScroll);

           //smoothscroll
           $('a[href^="#"]').on('click', function (e) {
               e.preventDefault();
               $(document).off("scroll");

               $('a').each(function () {
                   $(this).removeClass('selected-bg');
               })
               $(this).addClass('selected-bg');

               var target = this.hash,
                   menu = target;
               $target = $(target);
               $('html, body').stop().animate({
                   'scrollTop': $target.offset().top - 2
               }, 850, 'swing', function () {
                   window.location.hash = target;
                   $(document).on("scroll", onScroll);
               });
           });
       });

       function onScroll(event){
           var scrollPos = $(document).scrollTop();
           $('#mainNav a').each(function () {
               var currLink = $(this);
               var refElement = $(currLink.attr("href"));
               if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                   $('#mainNav ul li a').removeClass("selected-bg");
                   currLink.addClass("selected-bg");
               }
               else{
                   currLink.removeClass("selected-bg");
               }
           });
       }




//swiper

var mySwiper = new Swiper('.swiper-container', {
// Optional parameters
direction: 'vertical',
loop: true,

// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
scrollbar: {
el: '.swiper-scrollbar',
},
})
