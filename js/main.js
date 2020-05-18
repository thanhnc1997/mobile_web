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
  
  $(".product-option>.expand-option").click(function() {
    $(this).toggleClass("active");
    $(this).parent().next(".detail").slideToggle();
    
    let bg = $(this).parent().parent();
    if($(bg).hasClass("change-bg")) {
      $(bg).toggleClass("active");
    }
  });
  
  $('.menu-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive:{
      0:{
        items: 3
      }
    }
  });
  
  $(".product>.product-image").click(function() {
    $(this).next(".product-desc").find(".product-detail__wrapper").fadeIn();
  });
  
  $(".close-detail").click(function() {
    $(this).parent().parent().fadeOut();
  });
  
  $(".call-trigger").click(function(e) {
    e.preventDefault();
    $(this).parent().find(".call-modal__wrapper").fadeIn();
    
  })
})