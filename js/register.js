var connection = require('js/config.js');

connection.query('INSERT INTO users SET ?', users, function (error,results,fields
  if (error) {
    res.json({
      status:false,
      message: 'There are som error with the query'
    })

  } else {
    res.json({
      status:true,
      data:results,
      message:'user registered succesfully'
    })
  }
