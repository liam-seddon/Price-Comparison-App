function Toggle(e) {
  if(e.innerHTML == 'Show') {
    e.innerHTML = 'Hide'
    document.getElementById('userpasswd').type="text";
  } else {
    e.innerHTML ='Show'
    document.getElementById('userpasswd').type="password"
  }
}
