// SERVER-SIDE JAVASCRIPT
console.log('Sanity Check: Server JS is working!');

// REQUIREMENTS //
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// CONFIG //

app.set('view engine', 'ejs');  // set ejs as view engine
//app.use("/static", express.static("public"));  // serve js & css files
app.use(express.static('public'));  // serve js & css files
app.use(bodyParser.urlencoded({ extended: true }));  // body parser config to accept our datatypes



//DATA
var posts =[
  {id: 0, post: "ummmm post 1"},
  {id: 1, post: "little boo is asleep"},
  {id: 2, post: "bunny is out walking Charlie"},
  {id: 3, post: "It is Saturday night and I am trying to make this work"},
  {id: 4, post: "hmmm, I hope this works"}
];


app.get("/", function (req, res){
	res.render('index', {posts: posts});
});



app.get("/api/posts", function (req, res){
	res.render('views/index.ejs', {posts: posts});
  if (posts.length !== 0){
	  newPost.id = posts[posts.length - 1].id + 1;      // add a unique id
  } else {
  	newPost.id = 0;
  }
  posts.push(newPost);    // add new post to DB (which, in this case, is an array)
  res.json(newPost);   // send a response with newly created object
});



app.post("/api/posts", function (req, res){
  console.log(req.body);
  var newPost = {};
});


// api route to delete a food
app.delete("/api/posts/:id", function (req, res){
  var targetId = parseInt(req.params.id);    // set the value of the id
  //var targetItem = findWhere(posts {id: targetId});    // find item in the array matching the id
  var targetItem = findWhere(posts.id === targetID);
  var index = posts.indexOf(targetItem);    // get the index of the found item
  posts.splice(index, 1);    // remove the item at that index, only remove 1 item
  res.json(targetItem);    // send back deleted object
});


// api route to update a post
app.patch("/api/posts/:id", function(req, res){
  var targetId = parseInt(req.params.id);    // set the value of the id
  var targetItem = findWhere(posts, {id: targetId});    // find item in the array matching the id
  // edit object, but don't change name or yumminess 
  // if the request's values for them are blank 
  targetItem.post = req.body.post || targetItem.post;
  res.json(targetItem);    // send back edited object
});




app.listen(3000, function (){
  console.log('listening on port 3000');
});


