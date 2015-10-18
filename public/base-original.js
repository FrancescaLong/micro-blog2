console.log("Sanity Check: JS is working!");

$(document).ready(function(){

 var posts = [];

$("#submitButton").on("click", function(){
	event.preventDefault();
	var value = $("#inputBox").val();
	var html = posts.unshift("<li class='postsToPresent'>" + value + "<span class='glyphicon glyphicon-remove pull-right'></span></li>");
	$("ul").append(posts[0]);
	alert(posts);
	//console.log(posts);

	//console.log($(posts).length);
	});
});




//Here's what we were working on in case you want to look at it some more
​
$(document).ready(function(){
​
	var posts = [];
​
​
​
	submitForm(posts);
	deleteButton();
	
	$(label).innerHTML("Last 10 out of " + posts.length + " entries..")
});
​
​
var submitForm = function(posts){
	var index = 1;
	$("#submitButton").on("click", function(){
		event.preventDefault();
		var value = $("#inputBox").val();
		var html = posts.push("<li id=" + index +  "class='postsToPresent'>" + value + "<span class='glyphicon glyphicon-remove pull-right'></span></li>");
		count+= 1;
		$("ul").append(posts[0]);
		alert(posts);
		//console.log(posts);
​
		//console.log($(posts).length);
		});
	});
}
​
var addEventListenerToDeleteButton = function(posts){
	$(".glyphicon-remove").on("click", function(){
		deleteItem(posts):
	})
}
​
var deleteItem = function(posts){
	posts.splice($(this).id,1);
	$("ul").remove($(this).parent());
}
/*
MicroBlog.prototype.render = function(post){
	// construct HTML string
	var html = "<li class='postsToPresent'>" + posts + "<span class='glyphicon glyphicon-remove pull-right'></span></li>";
	// put it on DOM
	this.$blogDiv.append(html);
	// clear the contents of the form
	this.$value.val('');
	// add event listener to the delete glyphicon
	// TODO: dynamic event listeners that don't need to be called later
	this.listenToDelete();
};	
*/

/*
$.ajax({
  url: "index.html",
  context: document.ul
}).done(function() {
  $( this ).addClass( "postsToPresent" );
});
*/




/*
$.ajax({
  url: "test.html",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});
*/


/*
	$.getJSON( "ajax/test.json", function( data ) {
  	var items = posts;
  	$.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  	});
 
  	$( "<ul/>", {
    "class": "postsToPresent",
    html: items.join( "" )
  	}).appendTo( "ul" );
});
});
*/



/*
var jsonobj = eval("(" + postsToPresent + ")");
var postArray = jsonobj["postsToPresent"];
*/

/*
$("#inputBox").on("click", "button", function(){}

$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p" ).text( value );
  })
  .keyup();
*/


/*
$("#submitButton").on("click", function(){
  		event.preventDefault();
  		Posts.postText = "#inputBox".val(),
  		Posts.counter = Posts.counter++,
  		Posts.postDateTime = new Date()
});
*/


/*
Posts.postText = "test1",
Posts.counter = counter++,
Posts.postDateTime = new Date()

console.log(Posts);
console.log(Posts[0]);
/*

/* internet solution 2 - also fails to put anyting into the object
var data = $('#form').serializeArray().reduce(function(posts, input) {
    posts[input.blog] = input.inputBox;
    return posts;
}, {});
*/

/* internet solution 1 - also fails to put anyting into the object
$("#submitButton").on("click", function(){
  		$("#form.input").each(function() {
  			data[input] = input;
  		 	data[counter] = counter++;
  		 	data[postDateTime] = new Date();
	});
});
*/

/* My original solution - doesn't push the data into the object
$("#submitButton").on("click", function(){
  		posts.input = new input("#inputBox"),
  		posts.counter = new counter(counter++),
  		posts.postDateTime = new Date()
});
*/



/*
 $("#square1").one("click", function(){
 	$("#square1").css("color", "green");
 	$("#square1").append(switchMarker()); 
 	console.log("Play number " + turnCounter);
 	plays[0] = marker;
 	checkWinner();
 	if (winnerDeclared === 0) {
 		alert("Next player is " + nextPlayer);
		}
	});
*/	





