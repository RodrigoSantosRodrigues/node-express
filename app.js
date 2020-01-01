var express   = require('express');
var http      = require('http');
var app       = express();

const routes  = require('./routes');
var bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : false
}));
app.use('/hello', routes);
app.get('/', function(req, res){
  res.send('Helo word express');
});

//Starting with express
app.listen(3000, function(){
  console.log('App listening in port 3000');
});


//Starting with http
/*
http.createServer(app).listen(3000, function(){
  console.log('App listening in port 3000');
});
*/