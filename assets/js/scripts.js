$(document).ready(function() {
  new WOW().init();

  $("nav ul li a").click(function(e) {
    var a = $(this);
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
    $("nav").css("transform", "translateX(100%)");
    $("#background-for-menu").fadeOut();
  });

  $(".toggle-menu").click(function() {
    $("nav").css("transform", "translateX(0)");
    $("#background-for-menu").fadeIn(300);
  });

  $("#background-for-menu").click(function() {
    $("nav").css("transform", "translateX(100%)");
    $(this).fadeOut();
  });
});
