Main = {
  init: function(){

    // Mobile menu

$("#user_email").focus();

    /* Mobile Nav */

    $("#menu-trigger").click(function() {
      $("#main-header nav ul").toggle();
      $(".header-form").hide();
    });

  }
}

$(document).ready(function() {
  Main.init();
});
