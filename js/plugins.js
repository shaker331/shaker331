$(document).ready(function(){
    

  'use strict' ; 
    $(window).scroll(function () {
   var navbar = $('.navbar') ;
   if ($(window).scrollTop() >= navbar.height()){
       navbar.addClass('scrolled');
       
   } else{
       navbar.removeClass('scrolled');
   }
});});

//NEW


$(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');
  

    

$(window).on('load', function () {
    $('body').css("overflow","auto");
    
    $('.loading .spinner').fadeOut(1000,function(){
                             
                             $(this).parent().fadeOut(2000,function(){
                               $(this).remove();  
                             });
                             });
    
    
    
});
$('.nav-tabs-dropdown').each(function(i, elm) {
    
    $(elm).text($(elm).next('ul').find('li.active a').text());
    
});
  
$('.nav-tabs-dropdown').on('click', function(e) {

    e.preventDefault();
    
    $(e.target).toggleClass('open').next('ul').slideToggle();
    
});

$('#nav-tabs-wrapper a[data-toggle="tab"]').on('click', function(e) {

    e.preventDefault();
    
    $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());
      
});


//scroll


$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})
