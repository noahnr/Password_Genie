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
      sPassword, sPassword
    })
      .then((data) => {
        $("#username").val(data.username);
    })
  }
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.name);
  });
});

