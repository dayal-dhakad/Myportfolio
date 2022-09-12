$(document).ready(function(){
 $(window).scroll(function(){
   if (this.scrollY > 20){
    $('.navbar').addClass("sticky")
   } else{

   }
})
 $('.menu-btn').click(function(){
  $('.navbar .menu').toggleClass('active')
  $('.menu-btn i').toggleClass('active')
 });

var typed = new Typed(".typing",{
strings: ["Engineer...","Web Developer...", "Engineer..."],
typeSpeed: 100,
backspeed: 60,
loop: true,

});

});


