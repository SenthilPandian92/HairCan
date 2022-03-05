const express = require('express');
const path = require('path');
var myApp = express();

// set up views and public folders
myApp.set('views', path.join(__dirname, 'views'));
myApp.use(express.static(__dirname+'/public'));
myApp.set('view engine', 'ejs');

myApp.get('/', function(req, res){
res.render('home'); // no need to add .ejs to the file name
});

myApp.get('/about', function (req, res) {
    res.render('about');
  });

myApp.get('/customer-signup', function (req, res) {
    res.render('customer-signup');
  });

myApp.get('/vendor-signup', function (req, res) {
    res.render('vendor-signup');
  });

  
  

myApp.listen(8080);
console.log('Everthing executed fine.. Open http://localhost:8080/');




