 $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })


$(document).ready(function() {
    $('#myCarousel').carousel({
      interval: 10000
      })
    
    $('#myCarousel').on('slid.bs.carousel', function() {
      //alert("slid");
      });
    
    
});


/*
Author       : Theme_ocean.
Template Name: Fury - Product Landing Page
Version      : 1.0
*/
(function($) {
      'use strict';
      
      jQuery(document).on('ready', function(){
      
                  $('a.page-scroll').on('click', function(e){
                        var anchor = $(this);
                        $('html, body').stop().animate({
                              scrollTop: $(anchor.attr('href')).offset().top - 50
                        }, 1500);
                        e.preventDefault();
                  });         

      });   

                        
})(jQuery);






