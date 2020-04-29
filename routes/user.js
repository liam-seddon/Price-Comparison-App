exports.index = function (req, res){
  message='';
  if (req.method == "POST"){
    //post the data
  } else {
    res.render('Register');
  }
};
