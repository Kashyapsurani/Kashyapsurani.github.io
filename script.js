$(document).ready(function(){
    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar');
            const scrollUpBtn = document.querySelector('.scroll-up-btn');

            // sticky navbar
            if (window.scrollY > 100) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }

            // scroll-up button show/hide
            if (window.scrollY > 500) {
                scrollUpBtn.classList.add('show');
            } else {
                scrollUpBtn.classList.remove('show');
            }
        });

        // scroll up
        document.querySelector('.scroll-up-btn').addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });


    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [
            "Fullstack Developer",
            "Software Developer",
            "Problem Solving ",
            "Ai Tools",
          ],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true,
    });

    var typed = new Typed(".typing-2", {
       strings: [
            "Fullstack Developer",
            "Software Developer",
            "Problem Solving ",
            "Ai Tools",
          ],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 2,
                nav: true
            },
            1000:{
                items: 3.5,
                nav: true
            }
            
        },
        
        
    });



});

// Function to trigger animation on elements when they come into view

document.querySelector(
  "footer span"
).innerHTML += ` ${new Date().getFullYear()}`;
