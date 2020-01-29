function ShowPassword() {
  var x = document.getElementbyId('userpasswd');
  if(x.type === "password"){
    x.type = "text";
  } else {
    x.type ="password";
  }
}
