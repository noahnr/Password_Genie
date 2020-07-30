/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
$(document).ready(function () { //when document(DOM) loads completely
    checkScroll(); //check if page is scrolled
    $(window).scroll(checkScroll); //get scroll position of window
});

function checkScroll() { //check if page is scrolled
    if ($(window).scrollTop() >= 10) { //if window is scrolled 300px or more
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

/*========== PASSWORD GENERATOR ==========*/

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // password length validation
    var isValid = false;
    // while length is not within 8 and 128,  display length prompt
    while (isValid == false) {
        var lengthPrompt = prompt("How many characters would you like your password to be?");
        var passwordLength = lengthPrompt;
        console.log(passwordLength);
        if (passwordLength > 7 && passwordLength < 129) {
            isValid = true;
        }
    }

    // prompt confirmation for each charcter types
    var charTypeConfirmLC = confirm("Would you like to include lowercase letters?");
    var charTypeConfirmUC = confirm("Would you like to include uppercase letters?");
    var charTypeConfirmN = confirm("Would you like to use numbers in this password?");
    var charTypeConfirmSC = confirm("Use special characters?");

    function generatePassword() {
        // define conditional character type strings
        var lowercase = "abcdefghijklmnopqrstuvwxyz";
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numeric = "0123456789";
        var specialCharacters = "!<>/?+#$%&";
        var passwordString = "";

        // initialize empty array for character type strings
        characterArray = [];
        // if LC selected, add LC charcter string (lowercase) 
        if (charTypeConfirmLC === true) {
            characterArray.push(lowercase);
            console.log(charTypeConfirmLC)
            passwordString += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
        }
        // if UC
        if (charTypeConfirmUC === true) {
            characterArray.push(uppercase);
            console.log(charTypeConfirmUC)
            passwordString += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
        }
        // if N
        if (charTypeConfirmN === true) {
            characterArray.push(numeric);
            console.log(charTypeConfirmN)
            passwordString += numeric.charAt(Math.floor(Math.random() * numeric.length));
        }
        // if SC
        if (charTypeConfirmSC === true) {
            characterArray.push(specialCharacters);
            console.log(charTypeConfirmSC)
            passwordString += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
        }
        console.log(characterArray);
        remainingCharCount = passwordLength - passwordString.length;
        console.log(remainingCharCount)

        // join conditional character strings to form character set (characters)
        characters = characterArray.join('');

        // add to passwordString from character set at random position while loop number <=  remaining password length
        for (var i = 0, n = characters.length; i < remainingCharCount; i++) {
            passwordString += characters.charAt(Math.floor(Math.random() * n));
        }
        return passwordString;
    }
    // select text area for password
    var passwordText = document.querySelector("#passwordTxtArea");
    // set password equal to returned value of generatePassword function
    var password = generatePassword();
    // set text area equal to password
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*========== BOUNCING DOWN ARROW ==========*/
$(document).ready(function () { //when document(DOM) loads completely
    $(window).scroll(function () { //on browser scroll
        $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); //make the opacity for the arrow class go from 1 to "-" (negative infinity) spanning 250px in height
    });
});

/*========== BOUNCING DOWN ARROW ==========*/
$(document).ready(function () { //when document(DOM) loads completely
    $(window).scroll(function () { //on browser scroll
        $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); //make the opacity for the arrow class go from 1 to "-" (negative infinity) spanning 250px in height
    });
});

/*========== MEET THE TEAM CAROUSEL ==========*/
$(document).ready(function () { //when document(DOM) loads completely
    $('#team-carousel').owlCarousel({ //owlCarousel settings
        autoplay: false, //set to false to turn off autoplay and only use nav
        autoplayHoverPause: true, //set to false to prevent pausing on hover
        loop: false, //set to false to stop carousel after all slides shown
        autoplayTimeout: 8000, //time between transitions
        smartSpeed: 1200, //transition speed
        dotsSpeed: 1000, //transition speed when using dots/buttons
        responsive: { //set number of items shown per screen width
            0: {
                items: 1 //0px width and up display 1 item
            },
            768: {
                items: 2 //768px width and up display 2 items
            },
            992: {
                items: 3 //992px width and up display 3 items
            }
        }
    });
});


/*========== TOP SCROLL BUTTON ==========*/
$(document).ready(function () { //when document(DOM) loads completely
    $(window).scroll(function () { //when webpage is scrolled
        if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
            $('.top-scroll').fadeIn(); //display element with class 'top-scroll'
        } else { //if not
            $('.top-scroll').fadeOut(); //hide element under 500 px
        }
    });
});


/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/
$(document).ready(function () { //when document(DOM) loads completely
    if ($(window).width() < 768) { //if the window is less than 768px
        $("div").attr('data-animation', 'fadeInUp'); //any div with the "data-animation" attribute should have it's value (animation style) changed to "fadeInUp"
        $("div").attr('data-delay', '0s'); //remove data delay
    }
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
                offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
            });
        });
    }

    onScrollInit($('.os-animation')); //function call with only items
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
});