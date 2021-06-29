// Javascript document

function openNav() {
    document.getElementById("nav").style.width = "280px";
}

function closeNav() {
    document.getElementById("nav").style.width = "0";
}

window.addEventListener('scroll',function() {
    let header = document.querySelector('#header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-acitve',windowPosition);
})

window.addEventListener('scroll',function() {
    let header = document.querySelector('.close');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('close-top',windowPosition);
})

window.addEventListener('scroll',function() {
    let header = document.querySelector('.menu-alt');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('menu-alt-resize',windowPosition);
})

window.addEventListener('scroll', function () {
    let header = document.querySelector('.logo-name');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('color-white', windowPosition);
})


// scroll reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    // reset: true
});

// Home
sr.reveal('.ban_img', {});
sr.reveal('.ban_title', { delay: 200 });
sr.reveal('.ban_text', { delay: 300 });
sr.reveal('.btn_con', { interval: 200 });

// About section
sr.reveal('.sub-heading', {});
sr.reveal('.about_img', {});
sr.reveal('.about_sub', { delay: 250 });
sr.reveal('.about_text', { delay: 300 });

// Skills Section
sr.reveal('.sk1', { });
sr.reveal('.sk2', { delay: 250});
sr.reveal('.sk3', { delay: 500});

// Portfolio Section
sr.reveal('.port_sec', {delay: 250});

// Experience section
sr.reveal('.exp_img', { delay: 250 });
sr.reveal('.exp_text', { delay: 300 });

// contact Section
sr.reveal('.contact-input', { delay: 200 });
sr.reveal('.message-area', { delay: 250 });
sr.reveal('.contact2', { interval: 200 });
sr.reveal('.con_sub', { delay: 250 });
sr.reveal('.con_text', { delay: 300 });