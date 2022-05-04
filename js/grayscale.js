// Navbar shrink function
var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
    } else {
        navbarCollapsible.classList.add('navbar-shrink')
    }

};

// Shrink the navbar 
navbarShrink();

// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navbarShrink);

// Activate Bootstrap scrollspy on the main nav element
const mainNav = document.body.querySelector('#mainNav');
if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 74,
    });
};

$("#buttonPhoto").click(function() {
    var id = $(this).attr("id");

    $("#experience").fadeIn(1000);
    $("#coding").css("display", "none");
    $("#photo").fadeIn(1000);
    document.getElementById("buttonCoding").classList.remove("active")
    document.getElementById("photo").classList.add("d-flex")
    
});
$("#buttonCoding").click(function() {
    var id = $(this).attr("id");

    $("#experience").fadeIn(1000);
    $("#coding").fadeIn(1000);
    $("#photo").css("display", "none");
    document.getElementById("photo").classList.remove("d-flex")
});

$("#coding").css("display", "block");
$("#photo").css("display", "none");


// Slider

setInterval(changeImage, 15000);
    var backgroundImg=['/img/photo1.jpg',
    '/img/photo2.jpg',
    '/img/photo3.jpg',
    '/img/photo4.jpg',
    '/img/photo5.jpg',
    '/img/photo6.jpg',
    '/img/photo7.jpg',
    '/img/photo8.jpg',
    '/img/photo9.jpg',
    '/img/photo10.jpg'
    ]

   function changeImage() {   
    var i = Math.floor((Math.random() * 9));
    
    document.getElementById("photo").style.backgroundImage="url("+backgroundImg[i]+")";

  }
