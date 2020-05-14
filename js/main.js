$(document).ready(function() {
  $("#nav_trigger").click(function() {
    $(".main-nav__overlay").fadeIn();
    setTimeout(function() {
      $(".main-nav").addClass("show");
    }, 1000);
  });
  $("#nav_close").click(function() {
    $(".main-nav").removeClass("show");
    setTimeout(function() {
      $(".main-nav__overlay").fadeOut();
    }, 500);
  })
})