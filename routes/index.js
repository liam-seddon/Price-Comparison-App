//Created to GET inex page

exports.index =function (req, res){
  var message='';
  res.render('index',{message: message});
}
