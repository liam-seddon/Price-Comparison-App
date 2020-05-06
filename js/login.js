function check(){
  var Userstoredname = local.Storage.getItem('username');
  var Userstoredpasswd = local.Storage.getItem('passwd');

  var UserName_Log = document.getElementById('UserName');
  var Passwd_Log = document.getElementById('userpasswd');

  if (UserName_Log.value == storedName && passwd.value == Userstoredpasswd){
    alert ("You Are Now Logged In!");
  }else{
    alert("Due to An Error, You Havent Been Logged In");
  }
  }
}
