$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
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
                
  "Dév. Web et App",
  "Analyse fonctionnelle",
  "Power BI - DataViz",
  "Data Analyse",
  "Modélisation de données",
  "Production de dashbord"


                    ]
,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [
  "Développeur Web",
  "Développeur App",
  "Specialiste Excel",
  "Specialiste PowerBI",
  "Data Analyst",
  "Concepteur Data"
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
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

  function telechargerCV(e) {
            // on laisse le navigateur ouvrir le PDF dans l’onglet
            // puis on déclenche un téléchargement en parallèle
            const lienDownload = document.createElement('a');
            lienDownload.href = e.currentTarget.href;
            lienDownload.download = 'CV ADENIRAN KADER.pdf';
            document.body.appendChild(lienDownload);
            lienDownload.click();
            document.body.removeChild(lienDownload);
        }



document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();                       // Empêche l’envoi classique

  // Récupère et encode chaque champ
  const nom     = encodeURIComponent(document.getElementById('nom').value);
  const email   = encodeURIComponent(document.getElementById('email').value);
  const sujet   = encodeURIComponent(document.getElementById('sujet').value);
  const message = encodeURIComponent(document.getElementById('message').value);

  // Construit l’URL mailto (sauts de ligne = %0A)
  const mailto = `mailto:adenirankader@yahoo.com`
               + `?subject=${sujet}`
               + `&body=Nom%20:%20${nom}%0A`
               + `Email%20:%20${email}%0A%0A`
               + `${message}`;

  // Ouvre le logiciel de messagerie / webmail par défaut
  window.location.href = mailto;
});
// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.classList.add('bg-gray-900', 'shadow-lg');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('bg-gray-900', 'shadow-lg');
        navbar.classList.add('bg-transparent');
    }
    
    // Show/hide scroll to top button
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTop > 300) {
        scrollTopBtn.classList.remove('opacity-0', 'invisible');
        scrollTopBtn.classList.add('opacity-100', 'visible');
    } else {
        scrollTopBtn.classList.add('opacity-0', 'invisible');
        scrollTopBtn.classList.remove('opacity-100', 'visible');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
document.getElementById('scroll-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Typing animation
document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('#typed', {
        strings: [
            "Développeur App et App",
            "Analyse fonctionnelle",
            "Power BI - DataViz",
            "Data Analyse",
            "Modélisation de données",
            "Production de dashbord"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    const typed2 = new Typed('#typed-2', {
        strings: [
            "Dév. Web",
            "Dév. App",
            "Specialiste Excel",
            "Specialiste PowerBI",
            "Data Analyst",
            "Concepteur Data"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nom = encodeURIComponent(document.getElementById('nom').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const sujet = encodeURIComponent(document.getElementById('sujet').value);
    const message = encodeURIComponent(document.getElementById('message').value);
    
    const mailto = `mailto:adenirankader@yahoo.com` +
        `?subject=${sujet}` +
        `&body=Nom%20:%20${nom}%0A` +
        `Email%20:%20${email}%0A%0A` +
        `${message}`;
    
    window.location.href = mailto;
});

// CV download function
function telechargerCV(e) {
    const lienDownload = document.createElement('a');
    lienDownload.href = e.currentTarget.href;
    lienDownload.download = 'CV ADENIRAN KADER.pdf';
    document.body.appendChild(lienDownload);
    lienDownload.click();
    document.body.removeChild(lienDownload);
}
