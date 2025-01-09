$(document).ready(function () {
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".navbar");
      const scrollUpBtn = document.querySelector(".scroll-up-btn");

      // sticky navbar
      if (window.scrollY > 100) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }

      // scroll-up button show/hide
      if (window.scrollY > 500) {
        scrollUpBtn.classList.add("show");
      } else {
        scrollUpBtn.classList.remove("show");
      }
    });

    // scroll up
    document
      .querySelector(".scroll-up-btn")
      .addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
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
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3.5,
        nav: true,
      },
    },
  });
});

// home

document.addEventListener("DOMContentLoaded", function () {
  // Select elements to animate
  const elementsToAnimate = [
    ".home-content",
    ".text-1",
    ".text-2",
    ".text-3",
    ".display-flx",
    ".image",
  ];

  // Create an intersection observer to observe when the elements come into view
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        // If the element is in view, add animation classes
        if (entry.isIntersecting) {
          const element = entry.target;
          // Delay the addition of animation classes to trigger them sequentially
          setTimeout(function () {
            element.classList.add("animate__animated");
            if (element.classList.contains("image")) {
              element.classList.add("animate__slideInRight");
            } else {
              element.classList.add("animate__slideInLeft");
            }
          }, 500);

          // Stop observing the element after it has been animated
          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is in view
  );

  // Observe each element
  elementsToAnimate.forEach(function (selector) {
    const element = document.querySelector(selector);
    if (element) {
      observer.observe(element);
    }
  });
});


// About

document.addEventListener("DOMContentLoaded", function () {
  // Add scroll event listener
  document.addEventListener("scroll", function () {
    const columnleft = document.querySelectorAll(".columnleft");
    const columnright = document.querySelectorAll(".columnright");
    const triggerBottom = (window.innerHeight / 5) * 4; // Define the trigger position for the animation

    // For columnleft
    columnleft.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("visible-left"); // Add visible-left to trigger animation
      } else {
        section.classList.remove("visible-left"); // Remove visible-left if not in viewport
      }
    });

    // For columnright
    columnright.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("visible-right"); // Add visible-right to trigger animation
      } else {
        section.classList.remove("visible-right"); // Remove visible-right if not in viewport
      }
    });
  });
});

// Text tecks

// Function to check if the element is in the viewport
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Scroll event listener to trigger the animation
window.addEventListener("scroll", function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (isInView(card)) {
      // Add the 'visible' class when the card is in the viewport
      card.classList.add("visible");
    } else {
      // Optional: Remove the 'visible' class when the card is out of the viewport
      card.classList.remove("visible");
    }
  });
});

// Trigger scroll event on page load to check the initial visibility
window.dispatchEvent(new Event("scroll"));

// skill

window.addEventListener("DOMContentLoaded", (event) => {
  // Initialize AOS with custom settings
  AOS.init({
    duration: 1200, // Duration of animations (in ms)
    easing: "ease-in-out", // Easing function for smooth animation
    once: false, // Set this to 'false' to repeat animations when they come into view again
    offset: 200, // The distance from the top of the viewport at which the animation should trigger
    delay: 100, // Default delay before the animation starts
    disable: "mobile", // Disable AOS on mobile devices (optional)
  });

  // Debugging log to confirm AOS initialization
  console.log("AOS initialized successfully");

  // Optional: If you want to add any custom event listeners or further enhancements, you can do so below
  // Example: Custom event listener for the 'celebrate' button animation
  document.getElementById("celebrateButton")?.addEventListener("click", () => {
    console.log("Celebrate button clicked!");
    // You can trigger other animations or actions on button click here
  });
});

// Refresh AOS when the user scrolls to trigger animations again
window.addEventListener("scroll", function () {
  // Refresh AOS animations manually on scroll
  AOS.refresh();
});

// swiper

document.addEventListener("DOMContentLoaded", function () {
  // Apply initial animation to all .swiper-slide elements when the page is loaded
  anime({
    targets: ".swiper-slide",
    translateY: [50, 0], // Slide up
    opacity: [1], // Fade in
    delay: anime.stagger(200), // Stagger each slide
    duration: 1000,
    easing: "easeOutExpo",
  });

  // Observe visibility of swiper-slide elements for additional animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            scale: [0.0, 1], // Scale up effect
            opacity: [0.0, 1],
            duration: 800,
            easing: "easeOutExpo",
          });
          // Optional: If you want the animation to repeat on scroll, don't unobserve
          // observer.unobserve(entry.target); // Only animate once (uncomment to keep it once)
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the element is visible
    }
  );

  // Start observing all .swiper-slide elements
  const swiperSlides = document.querySelectorAll(".swiper-slide");
  swiperSlides.forEach((slide) => {
    observer.observe(slide);
  });

  // Optionally, you can add a listener to refresh the animations on scroll
  window.addEventListener("scroll", function () {
    // Refresh AOS or any other animation library if necessary
    observer.takeRecords(); // Trigger a re-evaluation of all observed elements
  });
});


// footer 

document.querySelector(
  "footer span"
).innerHTML += ` ${new Date().getFullYear()}`;
