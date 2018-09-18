$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $(HTMLBodyElement).addClass(‘.changeColor’)
      }
      if ($(this).scrollTop() < 50) {
         $(‘body’).removeClass(.‘changeColor’)
      }
   });
});