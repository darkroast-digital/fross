// *************************************************************************
// *************************************************************************
// *************************************************************************

require('./bootstrap');


// #LOADER
// =========================================================================

$(document).ready(function(){
    $('.loader__container').addClass('is--loaded');
});



// #NAV
// =========================================================================

$('.nav__navbar li').click(function() {
    $('.nav__navbar li').removeClass('is--active');
    $(this).addClass('is--active');
});

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
  



// #MENU
// ========================================================================

var menuTrigger = document.querySelector('.menu__trigger');
var menu = document.querySelector('.menu');

menuTrigger.addEventListener('click', function () {
    this.classList.toggle('is--open');
    menu.classList.toggle('is--open');
});



// #FORM
// ========================================================================

// var form = $('.form');

// $(form).submit(function(e) {
//   e.preventDefault();

//   var formData = new FormData($(this)[0]);

//   //if files => formData.append('file', $('input[type=file]')[0].files[0]);

//   $.ajax({
//     type: 'post',
//     url: $(this).attr('action'),
//     data: formData,
//     processData: false,
//     contentType: false
//   })
//   .done(function (response) {
//     $('input').val('');
//     $('textarea').val('');
//     $('<div class="alert is-success">Your Message Was Sent! We\'ll be in touch.</div>').insertAfter(form);
    
//     console.log('success' + response);
//   })
//   .fail(function (data) {
//     $('input').val('');
//     $('textarea').val('');
//     $('<div class="alert is-error">Oh no! Something went wrong, try again.</div>').insertAfter(form);
    
//     console.log('fail' + data);
//   })

// });


