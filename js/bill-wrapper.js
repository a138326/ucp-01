$(document).ready(function(){

$(".btn-group > .btn").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
    
$("#nav2 > .nav2-list").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});

$("#nav2-00").addClass("hide");
$("#nav2-break").addClass("hide");
 
var targetOffset1 = $("#anchor-01").offset().top;
var $w1 = $(window).scroll(function(){
    if ( $w1.scrollTop() > targetOffset1 -10) {
        $("#nav2 .nav2-list").removeClass("active");
        $("#nav2-01").addClass("active");
        
    }
     if ( $w1.scrollTop() < targetOffset1 ) {
       $("#nav2-00").addClass("hide");
        $("#nav2-break").addClass("hide");
    } 
    if ( $w1.scrollTop() > targetOffset1 -200) {
        $("#nav2-00").removeClass("hide");
        $("#nav2-break").removeClass("hide");
    }
    
   
});
    
var targetOffset2 = $("#anchor-02").offset().top;
var $w2 = $(window).scroll(function(){
    if ( $w2.scrollTop() > targetOffset2 - 200) {
        $("#nav2 .nav2-list").removeClass("active");
        $("#nav2-02").addClass("active");
    
    } else {
    }
});
    
var targetOffset3 = $("#anchor-03").offset().top;
var $w3 = $(window).scroll(function(){
    if ( $w3.scrollTop() > targetOffset3 - 200) {
        $("#nav2 .nav2-list").removeClass("active");
        $("#nav2-03").addClass("active");
    
    } else {
    }
});

var targetOffset4 = $("#anchor-04").offset().top;
var $w4 = $(window).scroll(function(){
    if ( $w4.scrollTop() > targetOffset4 - 200) {
        $("#nav2 .nav2-list").removeClass("active");
        $("#nav2-04").addClass("active");
    
    } else {
    }
});

var targetOffset5 = $("#anchor-05").offset().top;
var $w5 = $(window).scroll(function(){
    if ( $w5.scrollTop() > targetOffset5 - 200) {
        $("#nav2 .nav2-list").removeClass("active");
        $("#nav2-05").addClass("active");
    
    } else {
    }
});
	

    
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
    
    
    
});
