// PAGE NAVIGATION
function showPage(pageId) {

    // hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // show selected page
    document.getElementById(pageId).classList.add('active');

    // active navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // scroll top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// HERO PARALLAX
window.addEventListener('scroll', () => {

    const scrolled = window.pageYOffset;

    const heroImage = document.querySelector('.hero-image');

    if(heroImage){
        heroImage.style.transform =
            `translateY(${scrolled * 0.3}px)`;
    }
});

// START
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website ready!");
});