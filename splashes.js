$(function(){
	var splashes = ["Heads!", "Tails!", "Blocked by cooper!", "Down with the censorship!"];
	$("#subtitle").html($("#subtitle").html().replace("Loading...", splashes[Math.floor(Math.random()*splashes.length)]));
});