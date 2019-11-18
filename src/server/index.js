const express = require('express'),
      mysql = require('mysql'),
      db_config = {
        host: 'eu-cdbr-west-02.cleardb.net',
        user: 'b4f7d71797d0d7',
        password: 'c6b9c19a',
        database: 'heroku_9efff5b806de5d4'
      },
      app = express(),
      port = process.env.PORT || 5000;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); 
                                                  
  connection.connect(function(err) {              
    if(err) {                                     
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    }                                     
  });                                     
                                          
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                      
      throw err;                                  
    }
  });
}
           
handleDisconnect();

app.get('/express_backend/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, result) => {
    if(err) {
      return res.send(err);
    } else {
      return res.json(result[0])
    }
  });
});
app.get('/express_backend/stock', (req, res) => {
  connection.query('SELECT * FROM stock', (err, result) => {
    if(err) {
      return res.send(err);
    } else {
      return res.json(result[0])
    }
  });
});
app.get('/express_backend/invent', (req, res) => {
  connection.query('SELECT * FROM invent', (err, result) => {
    if(err) {
      return res.send(err);
    } else {
      return res.json(result[0])
    }
  });
});


app.listen(port, () => console.log('Server app listening on port ' + port));

