Main = {
  init: function(){

    // Mobile menu

$("#user_email").focus();

    /* Login Dropdown */

    $(".login-trigger").mouseover(function() {
      $("#main-header nav ul").hide();
      $(".header-form").show();
      if(!$("#login_email").val()) { $("#login_email").focus(); }
      else { $("#login_password").focus(); }
    });

    $(".signup-trigger").mouseover(function() {
      $("#main-header nav ul").hide();
      $(".header-form").show();
      if(!$("#signup_email").val()) { $("#signup_email").focus(); }
    });

    $(".back-arrow").click(function() {
      $(".header-form").hide();
    });


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
