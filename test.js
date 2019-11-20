

var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });



app.use(express.static('./public'))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, ''));


app.get('/form', function (req, res) {
  var html='';
  html +="<body>";
  html += "<form action='/submit'  method='post' name='form1'>";
  html += "</p><input type= 'text' name='name' placeholder='Name'>";
  html += "</p><input type= 'text' name='surname' placeholder='Surame'>";
  html += "<input type='submit' value='submit'>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});

app.post('/submit', urlencodedParser, function (req, res){
	res.render("index", {
		name: req.body.name,
		surname: req.body.surname
	})
 });

/*app.post('/submit', urlencodedParser, function (req, res){
  var reply='';
  reply += "Name is " + req.body.name;
  reply += "<br>Surname is " + req.body.surname; 
  res.send(reply);
 });*/
 

app.listen(8000);