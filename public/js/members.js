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
        for (var i = 0; i < data.length; i++) {
          // create a parent div for the oncoming elements
          var siteData = $("<div>");
          // add a class to this div: 'well'
          siteData.addClass("newEntry");
          // add an id to the well to mark which well it is
          siteData.attr("id", "siteInfo" + i);
          // append the well to the well section
          $("#site-Data").append(siteData);

          // Now add all of our character data to the well we just placed on the page

          // make the name an h2,
          $("#siteInfo" + i).append("<h1>Site:" + data[i].site + "</h1>");
          // the role an h3,
          $("#siteInfo" + i).append("<h1>Username:" + data[i].username + "</h1>");
          // the age an h3,
          $("#siteInfo" + i).append("<h1>Password:" + data[i].sPassword + "</h1>");
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