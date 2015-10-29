console.log("Sanity Check: Base JS is working!");

$(document).ready(function(){

 var blogPosts = [{
  	index: 1,
 	entry: ''
 }];
	//submitForm(blogPosts);
	//deleteButton();
	
//$("label").innerHTML("Last 10 out of " + blogPosts.length + " entries..");
$("label").html("Last 10 out of " + blogPosts.length + " entries..");

$("#new-post-form").on("submit", function() {
	event.preventDefault();
	var value = $('#inputBox').val();
	console.log("top form submitted " + value);
});

/*
//  My original code that did post the entries 
$("#submitButton").on("click", function(){
	console.log("submitButton clicked");
	event.preventDefault();
	var value = $("#inputBox").val();
	var html = ("<li class='postsToPresent'>" + value + "<span class='glyphicon glyphicon-remove pull-right'></span></li>");
	var index = 1;
	blogPosts.push({index: index += 1, entry: html});
	$("ul").append(blogPosts[0]);
	//alert(blogPosts);
	//console.log(blogPosts);
	//console.log($(blogPosts).length);
	});

$.ajax({
  url: "test.html",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});
*/


/* from Margaux
function MyBlog(){
	this.entries = [];	//our backing array of entries

	// use JQuery selectors to find the important elements
	// (text box, button, list box)
	this.$pushMeButton = $('.btn');
	this.$entry = $('#myText');
	this.$blogDiv = $('.list-group');

	//assign onclick handler to button and connect to our createItem() function
	var blog = this;

	this.$pushMeButton.on('click', function(event){
		event.preventDefault();
		blog.createItem(blog.$entry.val());
	
		$.ajax({
		  method: "POST",
		  url: "/api/post",
		  data: $(this).serialize(),
		  success: console.log ("Woohoo!")
		});
	});

}
*/

// from Alex - modified with Margaux's code
var submitForm = function(blogPosts){
	var index = 1;
	this.$submitButton = $('.submitButton');
	this.$entry = $('#inputBox');
	this.$blogDiv = $('.list-group-item');

	var blog = this; //don't know if I need this

	this.$('#submitButton').on('click', function(event){
		event.preventDefault();
		var value = $('#inputBox').val();
		console.log("Button submit is working " + value);
		var html = blogPosts.push("<li id=" + id + "class='postsToPresent'>" + value + "<span class='glyphicon glyphicon-remove pull-right'></span></li>");
		index += 1;
		$.ajax({
			method: 'POST',
			url: '/api/blogPost',
			data: $(this).serialize(),
			success: console.log("it's finally posting!!!!!!!")
		});
		//$("ul").append(blogPosts[0]);
		console.log(blogPosts);
		alert(blogPosts);
		});
};



/* from Alex
var submitForm = function(blogPosts){
	var index = 1;
	$("#submitButton").on("click", function(){
		event.preventDefault();
		var value = $("#inputBox").val();
		var html = blogPosts.push("<li id=" + id + "class='postsToPresent'>" + value + "<span class='glyphicon glyphicon-remove pull-right'></span></li>");
		index += 1;
		$("ul").append(blogPosts[0]);
		console.log(blogPosts);
		alert(blogPosts);
		});
};
*/

var addEventListenerToDeleteButton = function(blogPosts){
	$(".glyphicon-remove").on("click", function(){
		deleteItem(blogPosts);
		index -= 1;
	});
};


var deleteItem = function(blogPosts){
	blogPosts.splice($(this).id,1);
	$("ul").remove($(this).parent());
};


});