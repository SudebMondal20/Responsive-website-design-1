$(document).ready(function(){

    $(".fa-bars").click(function(){
        $(this).toggleClass("fa-times");
        $(".nav-menu").toggleClass("nav-toggle");
    })

    $(window).on("scroll",function(){
        // $(".fa-bars").removeClass("fa-times");
        // $(".nav-menu").removeClass("nav-toggle");
    
        if($(window).scrollTop() > 50){
            $(".header").addClass("sticky")
        }
        else{
            $(".header").removeClass("sticky")
        }
    
     
       });

    
// owl carousel
$('.testimonial-section .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        autoplay:true,
        items:1
});
   
});