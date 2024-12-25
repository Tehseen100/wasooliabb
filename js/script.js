// Nav JS code 

const navMenu = document.querySelector(".nav-menu");
const closeNavMenu = document.querySelector(".cross");
const menuBar = document.querySelector(".menu-icon");

menuBar.addEventListener("click", () => {
    navMenu.classList.add("nave-menu-active");
    menuBar.style.display = "none";
});

closeNavMenu.addEventListener("click", () => {
    navMenu.classList.remove("nave-menu-active");
    menuBar.style.display = "block";
});



// Slider ScreenShot 
var screenshotSlider = new Swiper(".screenshotSlider", {
    slidesPerView: 3,
    spaceBetween: 5,
    loop: true,
    speed: 900,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        pauseOnMouseLeave: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
screenshotSlider.on('click', function () {
    featureSwiper.autoplay.start();
})



// Counters 

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Function to animate a single counter
function animateCounter(element, end, duration) {
    gsap.to(element, {
        innerText: end,
        duration: duration / 1000,
        ease: "power3.out",
        roundProps: { innerText: true },
        scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
        }
    });
}

const counters = document.querySelectorAll('.counter');

// Duration for the animation
const duration = 2000;

// Animate each counter
counters.forEach(counter => {
    const targetValue = parseInt(counter.getAttribute("data-target"));
    animateCounter(counter, targetValue, duration);
});


// Review Slider 

var reviewSlider = new Swiper(".reviewSlider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        pauseOnMouseLeave: true,
    },
});


// Modules Slider 

var moduleSwiper = new Swiper(".moduleSwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    speed: 900,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

moduleSwiper.on('reachEnd', function () {
    moduleSwiper.autoplay.stop();
    setTimeout(function () {
        moduleSwiper.slideTo(0);
        moduleSwiper.autoplay.start();
    }, 2000);
});

moduleSwiper.el.addEventListener('click', function () {
    moduleSwiper.autoplay.start();
});
