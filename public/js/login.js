$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function() {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
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
