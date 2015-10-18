// SERVER-SIDE JAVASCRIPT
console.log('Sanity Check: Server JS is working!');

// REQUIREMENTS //
var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser');

// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
//app.use("/static", express.static("public")); 
app.use(express.static('public'));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



//DATA
var posts =[
  {id: 0, post: "ummmm post 1"},
  {id: 1, post: "little boo is asleep"},
  {id: 2, post: "bunny is out walking Charlie"},
  {id: 3, post: "It is Saturday night and I am trying to make this work"},
  {id: 4, post: "hmmm, I hope this works"}
];


app.get('/', function (req, res){
	res.render('index', {posts: posts});
});

app.get("/api/posts", function (req, res){
	res.json(posts);
});


app.post('/api/posts', function (req, res){
  console.log(req.body);
  var newPost = {};
});


app.listen(3000, function (){
  console.log('listening on port 3000');
});


