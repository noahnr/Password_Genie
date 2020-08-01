$(document).ready(() => {
  var newSiteInfo = $("form.newSite");
  var siteName = $("#site-name-input");
  var siteUname = $("#site-uName");
  var sitePass = $("#site-password");

  newSiteInfo.on("submit", function (event) {
    event.preventDefault();
    var newSite = {
      site: siteName.val().trim(),
      username: siteUname.val().trim(),
      sPassword: sitePass.val().trim()
    };

    if (!newSite.site || !newSite.username || !newSite.sPassword) {
      return;
    }

    saveNewSite(newSite.site, newSite.username, newSite.sPassword);
    siteName.val("");
    siteUname.val("");
    sitePass.val("");
  });

  function saveNewSite(site, username, sPassword) {
    $.post("/api/new_site_data", {
      site: site,
      username: username,
      sPassword: sPassword

    }).then(data => {
      $.get("/api/new_site_data").then(data => {
        console.log(data);
        console.log(data.siteRecords);
        for (var i = 0; i < data.siteRecords.length; i++) {
          // create a parent div for the oncoming elements
          var siteData = $("<tr>");
          // add a class to this div: 'well'
          siteData.addClass("newEntry");
          // add an id to the well to mark which well it is
          siteData.attr("id", "siteInfo" + i);
          // append the well to the well section
          $("#site-Data").append(siteData);

          // Now add all of our character data to the well we just placed on the page

          // make the name an h2,
          $("#siteInfo" + i).append("<td>Site:" + data.siteRecords[i].site + "</td>");
          // the role an h3,
          $("#siteInfo" + i).append("<td>Username:" + data.siteRecords[i].username + "</td>");
          // the age an h3,
          $("#siteInfo" + i).append("<td>Password:" + data.siteRecords[i].sPassword + "</td>");
          $("#siteInfo").append("</tr>");
        }
      });
    });
  }
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.name);
  });

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