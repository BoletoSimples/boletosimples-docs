Main = {
  init: function(){


    // mobile menu

    $("#user_email").focus();


    /* mobile nav */

    $("#menu-trigger").click(function() {
      $("#main-header nav ul").toggle();
      $(".header-form").hide();
    });

  }
}

$(document).ready(function() {
  Main.init();
});
