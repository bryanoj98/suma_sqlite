const express = require('express');
const app = express();
const path = require('path');
const db = require('./Data/database');
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/js_node/suma.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'js_node/suma.js'));
});
app.get('/css_node/index.css', function(req, res) {
    res.sendFile(path.join(__dirname, 'css_node/index.css'));
});
db.sequelize.sync().then(() => {

  app.listen(process.env.PORT || 4000, function(){
      console.log('Your node js server is running');
  });
});
