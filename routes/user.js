//Get Homepage
exports.index = function (request, response){
  message='';
  if (req.method == "POST"){
    //post the data
  } else {
    res.render('login');
  }
};

//Login method
exports.login = function(request, response){
   var message = '';
   var sess = req.session;

   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;

      var sql="SELECT id, first_name, last_name, user_name FROM `users` WHERE `user_name`='"+name+"' and password = '"+pass+"'";
      db.query(sql, function(err, results){
         if(results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            res.redirect('/views/Shopping_Area');
         }
         else{
            message = 'Wrong Credentials.';
            res.render('login.ejs',{message: message});
         }

      });
   } else {
      res.render('login.ejs',{message: message});
   }
};


//Register Method
exports.signup = function(request, response){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
      var fname= post.first_name;
      var lname= post.last_name;
      var mob= post.mob_no;

      var sql = "INSERT INTO `users`(`first_name`,`last_name`,`mob_no`,`user_name`, `password`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "')";

      var query = db.query(sql, function(err, result) {

         message = "Succesfully! Your account has been created.";
         res.render('Register.ejs',{message: message});
      });

   } else {
      res.render('Register');
   }
};

//Calling Shopping Area method
exports.Shopping_Area = function(request, response, next){

	var user =  req.session.user,
	userId = req.session.userId;

	if(userId == null){
		res.redirect("/home/login");
		return;
	}

	 var sql="SELECT * FROM `login_details` WHERE `id`='"+userId+"'";

	   db.query(sql, function(err, results){

		   console.log(results);

		   res.render('Shopping_Area.ejs', {user:user});

		});
};
