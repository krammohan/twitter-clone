// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

   $(document).ready(function() {
   	handleMostRecentTweets();
   	handleMostPopularHashtags();
   })


// display 50 most recent tweets

// parse with get json method
function getMostRecentTweets(){
	var requestPromise = $.ajax({
		url: "/tweets/recent", 
		method: "GET"
	})
	return requestPromise;
}

function handleMostRecentTweets(){
	var promiseFromAjax = getMostRecentTweets();

	promiseFromAjax.done(function(tweetObj){
		displayMostRecentTweets(tweetObj)
	})
}


function displayMostRecentTweets(tweetObj){
	for(var i = 0; i < 50; i++){

		$(".tweets-display").append("<li class='tweet'><img class='avatar' src='"+ tweetObj[i].avatar_url +"' alt=''><div class='tweet-content'><p><span class='full-name'>"+ tweetObj[i].username +"</span><span class='username'>"+ tweetObj[i].handle +"</span><span class='timestamp'>- 6m</span></p><p>"+ tweetObj[i].content +"</p></div></li>")
		
	}
}

function getMostPopularHashtags(){
	var requestPromise = $.ajax({
		url: "/hashtags/popular", 
		method: "GET"
	})
	return requestPromise;
}

function handleMostPopularHashtags(){
	var promiseFromAjax = getMostPopularHashtags();

	promiseFromAjax.done(function(hashtagObj){
		displayMostPopularHashtags(hashtagObj)
	})
}

function displayMostPopularHashtags(hashtagObj){
	for(var i = 0; i < 10; i++){

		$(".pop-hashtags").append("<li>" + hashtagObj[i].name + "<li>")
		
	}
}


