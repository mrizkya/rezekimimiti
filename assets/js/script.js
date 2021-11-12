


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 10){
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
     $('.nav-link scroolto').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.nav-link scroolto i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Teknik Komputer"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Pengembang Web", "Pengembang Android"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });



    const swiper = new Swiper('.swiper', {
        parallax: true,
        });



    
       // owl carousel script
        $('.carousel').owlCarousel({
        margin: 10,
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
