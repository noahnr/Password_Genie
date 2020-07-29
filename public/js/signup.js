$(document).ready(function () {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var nameInput = $("#name-input")
    var emailInput = $("#email-input");
    var passwordInput = $("input#password-input");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            name: nameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.name || !userData.email || !userData.password) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.name, userData.email, userData.password);
        nameInput.val("");
        emailInput.val("");
        passwordInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(name, email, password) {
        $.post("/api/signup", {
                name: name,
                email: email,
                password: password
            })
            .then(() => {
              window.location.replace("/members");
              // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
        }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
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

/*========== WAYPOINTS ANIMATION DELAY ==========*/
//Original Resource: https://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
$(function () { // a self calling function
    function onScrollInit(items, trigger) { // a custom made function
        items.each(function () { //for every element in items run function
            var osElement = $(this), //set osElement to the current
                osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
                osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time

            osElement.css({ //change css of element
                '-webkit-animation-delay': osAnimationDelay, //for safari browsers
                '-moz-animation-delay': osAnimationDelay, //for mozilla browsers
                'animation-delay': osAnimationDelay //normal
            });

            var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger

            osTrigger.waypoint(function () { //scroll upwards and downwards
                osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
            }, {
                triggerOnce: true, //only once this animation should happen
                offset: '100%' // animation should happen when the element is 70% below from the top of the browser window
            });
        });
    }

    onScrollInit($('.os-animation')); //function call with only items
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
});


/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/
$(document).ready(function () { //when document(DOM) loads completely
    if ($(window).width() < 768) { //if the window is less than 768px
        $("div").attr('data-animation', 'fadeInUp'); //any div with the "data-animation" attribute should have it's value (animation style) changed to "fadeInUp"
        $("div").attr('data-delay', '0s'); //remove data delay
    }
});