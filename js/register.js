function store(){
  var regusername = document.getElementById('FullName');
  var regpasswd = document.getElementById('userpasswd');
  var regemail = document.getElementById('Username');

  var lowercaseLetters = /[a-z]/g;
  var uppercaseLetters = /[A-Z]/g;
  var Numbers = /[0-9]/g;

  if (regusername.value.length == 0){
    alert("Please Fill In Name");
  } else if (regpasswd.value.length == 0){
    alert("Please Enter A Password!");
  } else if (regemail.value.length == 0){
    alert("Please Enter E-mail")
  } else if (regusername.value.length == 0 && regpasswd.value.length == 0 && regemail.value.length == 0){
    alert("Please Fill In Above Forms");
  } else if(regpasswd.value.length > 8){
        alert('Max of 8');

    }else if(!regpasswd.value.match(numbers)){
        alert('please add 1 number');

    }else if(!regpasswd.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!regpasswd.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('regusername', regusername.value);
        localStorage.setItem('regpasswd', regpasswd.value);
        localStorage.setItem('regemail', regemail.value);
        alert('Your account has been created');
    }
}
}
