$(document).ready(function() {
  $("#nav_trigger").click(function() {
    $(".main-nav__overlay").fadeIn();
    setTimeout(function() {
      $(".main-nav").addClass("show");
    }, 300);
  });
  $("#nav_close").click(function() {
    $(".main-nav").removeClass("show");
    setTimeout(function() {
      $(".main-nav__overlay").fadeOut();
    }, 300);
  });
  $(".location-list__item>.show-location").click(function() {
    $(this).parent().parent().find(".location-detail").slideDown();
  });
  $(".location-list__item>.hide-location").click(function() {
    $(this).parent().parent().slideUp();
  });
})