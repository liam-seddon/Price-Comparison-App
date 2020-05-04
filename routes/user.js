var express = require("express");
var router = express.Router();
var db = require('../config/db.config.js');

router.get ('/Shopping_Area', (req, res ,next){
  var sql = 'SELECT Price, Supplier FROM products_fruit';
  db.query(sql, function,(err, daat, fields)){
    if (err) throw err;
    res.render('Shopping_Area', {title:Shopping Area, procut_data_fruit:data});
  });

});

module.exports = router;
