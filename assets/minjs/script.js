console.log("liguei !!!"),$(document).ready(function(){$(".btn-link").on("click",function(){alert("to vivo !")}),console.log("liguei !!!"),$(".navbar-toggler").on("click",function(){$(".collapse.navbar-collapse").toggleClass("show"),$(".collapse.navbar-collapse").removeClass("collapsin"),$(".navbar-nav").toggleClass("active")}),$("#slider").on("slide.bs.carousel",function(o){var a=$(o.relatedTarget).index();$("#slider_captions .carousel-caption:not(#caption-"+a+")").fadeOut("fast",function(){$("#caption-"+a).fadeIn()})})});