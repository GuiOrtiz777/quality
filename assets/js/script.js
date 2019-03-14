$(document).ready(function() {
  $(window).resize(function() {
    console.log(window.outerWidth);
    if (window.outerWidth < 768) {
      $(".menu").addClass("--open");
      console.log("Entrei no if");
    } else {
      $(".menu").removeClass(".--open");
      console.log("Entrei no else");
    }
  });

  $(".btn-menu").click(function() {
    $(this).toggleClass("--close");
    $(".box-menu").toggleClass("--open");
    $(".menu").toggleClass("--open");
  });
});
