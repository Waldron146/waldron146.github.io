// Smooth scrolling for navigation links
document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Smoothly scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// Scroll to top button functionality
const scrollToTopButton = document.getElementById('scrollToTop');

// Show or hide the button based on scroll position
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Smoothly scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

