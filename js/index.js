// ========================================
// ROOM HOMEPAGE
// JAVASCRIPT
// ========================================


// ========================================
// HERO SLIDER DATA
// ========================================

const slides = [

    {
        image: "images/10 Great Armchairs For Your Home.jpg",

        title: "Discover innovative ways to decorate",

        description:
            "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },

    {
        image: "images/Coral lounge chair.jpg",

        title: "We are available all across the country",

        description:
            "With stores throughout the country, you can find the perfect furniture for your home. Our collection combines quality materials with beautiful designs to create spaces that feel truly yours."
    },

    {
        image: "images/Mid-Century Modern Sale at the Foundary —….jpg",

        title: "Manufactured with the best materials",

        description:
            "Our modern furniture combines innovative design with high-quality materials. We work with experienced designers and manufacturers to create products that are built to last."
    }

];


// ========================================
// SELECT HTML ELEMENTS
// ========================================

const heroImage = document.querySelector(".hero-image");

const heroTitle = document.querySelector(".hero-text h1");

const heroDescription = document.querySelector(".hero-text p");

const previousButton = document.querySelector(".btn-left");

const nextButton = document.querySelector(".btn-right");

const menuToggle = document.querySelector(".menu-toggle");

const navigationLinks = document.querySelector(".navigation-links");

const navLinks = document.querySelectorAll(".nav-list a");


// ========================================
// CURRENT SLIDE
// ========================================

let currentSlide = 0;


// ========================================
// SHOW SLIDE
// ========================================

function showSlide(index) {

    const slide = slides[index];

    // Add fade effect
    heroImage.classList.add("fade");

    setTimeout(function () {

        // Change hero image
        heroImage.style.backgroundImage =
            `url("${slide.image}")`;

        // Change heading
        heroTitle.textContent = slide.title;

        // Change paragraph
        heroDescription.textContent = slide.description;

        // Remove fade effect
        heroImage.classList.remove("fade");

    }, 200);

}


// ========================================
// NEXT SLIDE
// ========================================

function nextSlide() {

    currentSlide++;

    // If we reach the last slide,
    // return to the first slide

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


// ========================================
// PREVIOUS SLIDE
// ========================================

function previousSlide() {

    currentSlide--;

    // If we go before the first slide,
    // move to the last slide

    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}


// ========================================
// NEXT BUTTON
// ========================================

nextButton.addEventListener("click", function () {

    nextSlide();

});


// ========================================
// PREVIOUS BUTTON
// ========================================

previousButton.addEventListener("click", function () {

    previousSlide();

});


// ========================================
// KEYBOARD CONTROLS
// ========================================

document.addEventListener("keydown", function (event) {

    // Right arrow
    if (event.key === "ArrowRight") {

        nextSlide();

    }


    // Left arrow
    if (event.key === "ArrowLeft") {

        previousSlide();

    }

});


// ========================================
// MOBILE MENU
// ========================================

menuToggle.addEventListener("click", function () {

    // Open / close menu
    navigationLinks.classList.toggle("active");


    // Check if menu is currently open
    const menuIsOpen =
        navigationLinks.classList.contains("active");


    // Update accessibility attribute
    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );


    // Change hamburger icon
    if (menuIsOpen) {

        menuToggle.innerHTML =
            '<i class="fas fa-times"></i>';

    } else {

        menuToggle.innerHTML =
            '<i class="fas fa-bars"></i>';

    }

});


// ========================================
// CLOSE MOBILE MENU WHEN LINK IS CLICKED
// ========================================

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigationLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.innerHTML =
            '<i class="fas fa-bars"></i>';

    });

});


// ========================================
// AUTOMATIC SLIDER
// ========================================

// Change slide every 7 seconds

let autoSlide = setInterval(function () {

    nextSlide();

}, 7000);


// ========================================
// RESET AUTOMATIC SLIDER WHEN USER CLICKS
// ========================================

function resetAutoSlide() {

    clearInterval(autoSlide);

    autoSlide = setInterval(function () {

        nextSlide();

    }, 7000);

}


// ========================================
// UPDATE BUTTON EVENTS
// ========================================

nextButton.addEventListener("click", function () {

    resetAutoSlide();

});

previousButton.addEventListener("click", function () {

    resetAutoSlide();

});


// ========================================
// INITIALIZE FIRST SLIDE
// ========================================

heroImage.style.backgroundImage =
    `url("${slides[0].image}")`;

heroTitle.textContent =
    slides[0].title;

heroDescription.textContent =
    slides[0].description;