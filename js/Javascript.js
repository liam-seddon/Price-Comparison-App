
function Toggle() {
  var PasswordVis = document.getElementById('userpasswd');
  if (PasswordVis.type ==="password"){
    PasswordVis = "text";
  } else{
    PasswordVis="password"
  }
}




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


$(document).ready(function(){
  $('.method').on('click', function(){
    $('.method').removeClass('blue-border');
    $(this).addClass('blue-border');
  });


})
