//Javascript Code for toggle button to show/hide password
function Toggle() {
  var PasswordVis = document.getElementById('userpasswd');
  if (PasswordVis.type ==="password"){
    PasswordVis = "text";
  } else{
    PasswordVis="password"
  }
}
//-----------------------------------------------------------

//Javascript code for sticky nav bar
window.onscroll = function() {Mynavbar()};

var Sticky_nav = document.getElementById('navbar');

var sticky = navbar.offsetTop;

function]= Mynavbar(){
  if (window.pageYOffset >= 'sticky') {
    navbar.ClassList.add("sticky")

  } else {
    navbar.ClassList.remove("sticky");
  }
}
//-----------------------------------------------------------


//Javascript code for changing colour in HTML.
$(document).ready(Myfunction(){
  $('.method').on('click', Myfunction(){
    $('.method').removeClass('blue-border');
    $(this).addClass('blue-border');
  });


})
//------------------------------------------------------------

//validation for card details, alerts users to no information in input fields
var $cardInput = $('.input-fields input');

$('.next-bttn').on('click', Myfunction(e) {

  $cardInput.removeClass('warning');

  $cardInput.each(Myfunction() {
     var $this = $(this);
     if (!$this.val()) {
       $this.addClass('warning');
     }
  })
});
