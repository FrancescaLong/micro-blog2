console.log("Sanity Check: Base JS is working!");

$(document).ready(function(){

 var posts = {
  	id: 1,
 	post: ''
 };
	//submitForm(posts);
	//deleteButton();
	
//$("label").innerHTML("Last 10 out of " + posts.length + " entries..");
$("label").html("Last 10 out of " + posts.length + " entries..");

/*  My original code that did post the entries 
$("#submitButton").on("click", function(){
	event.preventDefault();
	var value = $("#inputBox").val();
	var html = posts.unshift("<li class='postsToPresent'>" + value + "<span class='glyphicon glyphicon-remove pull-right'></span></li>");
	$("ul").append(posts[0]);
	alert(posts);
	//console.log(posts);
	//console.log($(posts).length);
	});
*/

var submitForm = function(posts){
	var index = 1;
	$("#submitButton").on("click", function(){
		event.preventDefault();
		var value = $("#inputBox").val();
		var html = posts.push("<li id=" + 
					id + 
					"class='postsToPresent'>" + 
					value + 
					"<span class='glyphicon glyphicon-remove pull-right'></span></li>");
		index += 1;
		$("ul").append(posts[0]);
		console.log(posts);
		alert(posts);
		});
};


var addEventListenerToDeleteButton = function(posts){
	$(".glyphicon-remove").on("click", function(){
		deleteItem(posts);
		index -= 1;
	});
};

var deleteItem = function(posts){
	posts.splice($(this).id,1);
	$("ul").remove($(this).parent());
};


});