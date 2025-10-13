// ======================= scroll section avtive link ======================= //
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');
let headerEl = document.querySelector('header');
let scrollTopBtn = document.querySelector('.footer-iconTop a');

//زده شده Chat GPT کدهایی که با
// window.onscroll = () => {
//   // فعال کردن لینک مربوط به سکشن در دید کاربر
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach(links => {
//         links.classList.remove('active');
//       });
//       document
//         .querySelector('header nav a[href*=' + id + ']')
//         .classList.add('active');
//     }
//   });

//   // ================= sticky navbar =================
//   let header = document.querySelector('header');
//   header.classList.toggle('sticky', window.scrollY > 100);
// };


// کد های اصلی 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');
        }
    });

    // ======================= sticky navbar ======================= //
    if (headerEl) headerEl.classList.toggle('sticky', window.scrollY > 100);

    // close mobile menu on scroll
    if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

// ======================= mobile menu toggle ======================= //
if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

// ======================= close menu on nav click ======================= //
if (navLinks && navLinks.length && menuIcon && navbar) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });
}

// ======================= scroll to top (footer arrow) ======================= //
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}



