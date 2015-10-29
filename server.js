// SERVER-SIDE JAVASCRIPT
console.log('Sanity Check: Server JS is working!');

// REQUIREMENTS //
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var findWhere = require('./utils/findWhere.js');

// CONFIG //
app.set('view engine', 'ejs');  // set ejs as view engine
//app.use("/static", express.static("public"));  // serve js & css files
app.use(express.static('public'));  // serve js & css files
app.use(bodyParser.urlencoded({ extended: true }));  // body parser config to accept our datatypes

//DATA
var blogPosts =[
  {id: 0, entry: "ummmm post 1"},
  {id: 1, entry: "little boo is asleep"},
  {id: 2, entry: "bunny is out walking Charlie"},
  {id: 3, entry: "It is Saturday night and I am trying to make this work"},
  {id: 4, entry: "hmmm, I hope this will work at some point"}
];


// ROUTES //
app.get("/", function (req, res){    // render index.html and send with blogPosts data filled in
  res.render('index', {blogPosts: blogPosts});
});

// api route to get all blogPosts (we don't use)
app.get("/api/blogPosts", function (req, res){ 
  res.json(blogPosts);   // send post data as JSON
});

/* Marguax's code
app.post('/api/post', function (request, response){
   console.log(request.body);
   var newPost = post.create(request.body, function(error, newPost){
     console.log(newPost);
   });

   response.json(newPost);
 });
*/


// api route to create new post
app.post("/api/blogPosts", function (req, res){
  var newPost = post.create(request.body, function(error, newPost){
    console.log(newPost);
    }); 
  /*if (blogPosts.length !== 0){  // add a unique id
    newPost.id = blogPosts[blogPosts.length - 1].id + 1;
  } else {
    newPost.id = 0;
  }*/
  blogPosts.push(newPost);   // add new post to DB (which, in this case, is an array)  
  res.json(newPost);  // send a response with newly created object
});

/* toEatly code
app.post("/api/blogPosts", function (req, res){
  var newPost = req.body;  
  if (blogPosts.length !== 0){  // add a unique id
    newPost.id = blogPosts[blogPosts.length - 1].id + 1;
  } else {
    newPost.id = 0;
  }
  blogPosts.push(newPost);   // add new post to DB (which, in this case, is an array)  
  res.json(newPost);  // send a response with newly created object
});
*/

// api route to delete a post
app.delete("/api/blogPosts/:id", function (req, res){
  var targetId = parseInt(req.params.id);    // set the value of the id
  var targetItem = findWhere(blogPosts, {id: targetId});    // find item in the array matching the id
  var index = blogPosts.indexOf(targetItem);    // get the index of the found item
  blogPosts.splice(index, 1);    // remove the item at that index, only remove 1 item
  res.json(targetItem);    // send back deleted object
});


// api route to update a post
app.patch("/api/blogPosts/:id", function(req, res){
  var targetId = parseInt(req.params.id);    // set the value of the id
  var targetItem = findWhere(blogPosts, {id: targetId});    // find item in the array matching the id
  // edit object, but don't change name or yumminess 
  // if the request's values for them are blank 
  targetItem.post = req.body.post || targetItem.post;
  res.json(targetItem);    // send back edited object
});






app.listen(3000, function (){
  console.log('listening on port 3000');
});


