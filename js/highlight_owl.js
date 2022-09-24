$('.owl-carousel').owlCarousel({
            
    // 無限輪播
    loop:true,
    margin:25,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true,
        },
        600:{
            items:3,
            nav:false,
            loop:true,
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
            
        },
        1800:{
            items:4,
            nav:true,
            loop:true,   
        }     
    }
});


$('.owl-prev').html('<i class="fa-solid fa-chevron-left"></i>')
$('.owl-next').html('<i class="fa-solid fa-chevron-right"></i>')
$('.owl-prev').addClass('prev')
$('.owl-next').addClass('next')