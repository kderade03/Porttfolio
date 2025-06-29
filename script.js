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
  "Business Analyst",
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

