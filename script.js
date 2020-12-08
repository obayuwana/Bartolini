$('.carousel').carousel({
  interval: false
})

if ($(window).width() > 992) {
  $(window).scroll(function(){
     if ($(this).scrollTop() > 40) {
        $('#head').addClass("fixed-top");
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');}
        else{
        $('#head').removeClass("fixed-top");
        $('body').css('padding-top', '0');}
  });
}
