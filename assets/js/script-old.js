var qntItens = 0;

$(document).ready(function() {
  $(window).resize(function() {
    console.log(window.outerWidth);
    if (window.outerWidth < 450) {
      $(".menu").addClass("--open");
      console.log("Entrei no if");
    } else {
      $(".menu").removeClass(".--open");
      console.log("Entrei no else");
    }
  });

  $(".btn-menu").click(function() {
    $(this).toggleClass("--close");
    $(".menu").toggleClass("--open");
  });

  $("#carouselExampleControls").on("slide.bs.carousel", function() {
    $(".carousel-indicators li").each(function(element) {
      if ($(this).hasClass("active")) {
        //console.log('O li que tem active é: ' +element);
        var slide = $(this).data("slide-to");
        //console.log('O slide é: ' + (slide));
        mudaSlide(slide);
      }
    });
  });
  $(".carousel-caption .carousel-item").each(function(i) {
    qntItens = i;
    console.log("contei, vou derterminar o ultimo" + qntItens);
  });
});

function mudaSlide(slide) {
  slide = parseInt(slide + 1);
  //console.log('vou clocar no li posicao: ' + slide);
  if (slide < qntItens + 1) {
    $(".carousel-inner .carousel-item[data-slider=" + slide + "]").removeClass(
      "active"
    );
    $(
      ".carousel-inner .carousel-item[data-slider=" + (slide + 1) + "]"
    ).addClass("active");
  } else {
    $(".carousel-inner .carousel-item[data-slider=" + slide + "]").removeClass(
      "active"
    );
    $(".carousel-inner .carousel-item[data-slider=" + 1 + "]").addClass(
      "active"
    );
  }
}
