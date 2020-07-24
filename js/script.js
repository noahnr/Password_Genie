/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
$(document).ready(function () { //when document(DOM) loads completely
    checkScroll(); //check if page is scrolled
    $(window).scroll(checkScroll); //get scroll position of window
});

function checkScroll() { //check if page is scrolled
    if ($(window).scrollTop() >= 300) { //if window is scrolled 300px or more
        $('.navbar').addClass('solid'); //add class 'solid' to element with class 'navbar'
    } else { //if page is not scrolled 300px from top
        $('.navbar').removeClass('solid'); //remove class 'solid' from navbar element
    }
}

/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
$('.navbar-toggler').click(function () { //when navbar-toggler is clicked
    if ($(window).scrollTop() <= 300) { //if window scrolled 300px or less from top
        $("nav.navbar").toggleClass("solid-toggle"); //add the solid class to navbar
    }
});

/*========== COLLAPSE MOBILE MENU ON CLICK & SMOOTH SCROLL TO LINK ==========*/
$(document).on('click', 'a[href^="#"]', function (event) { //when link with "#" clicked
  event.preventDefault(); //prevent default click event
  $('.navbar-toggler').addClass('collapsed'); //add collapsed class to toggler
  $('#navbarResponsive').removeClass('show'); //remove class show from navbar

  setTimeout(function () { //delay execution of the following    
    $('.navbar').removeClass('solid-toggle'); //remove class solid-toggle from navbar     
  }, 300); //delay 300ms

  $('html, body').animate({ //animate window scrolling (on click of "#" link)
      scrollTop: $($.attr(this, 'href')).offset().top //when scrolling to link destination
  }, 1000); //at animated window speed of 1000ms
});

