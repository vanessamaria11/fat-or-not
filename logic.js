  var config = {
    apiKey: "AIzaSyBw6fC9f9-X1SixpkDqMLKh3a361mQGa_o",
    authDomain: "group-project-b78cb.firebaseapp.com",
    databaseURL: "https://group-project-b78cb.firebaseio.com",
    storageBucket: "group-project-b78cb.appspot.com",
    messagingSenderId: "815549298774"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function(){
	$("#FAT").show();
	$("#firstFat").hide();
	$("#SKINNY").show();
	$("#garfield-message").hide();
	$("#onloadquestion")
	$("#fitCat").hide();
	$("#secondPageload").hide();
	$("#Happydance").hide();
	$("#dancingDog").hide();
	$(".locationInfo").hide();
	startSlideShow();
	// changeSkinnyDisplay();
})


$("#FAT").on('click', function(event){
	event.preventDefault();

	// alert("im fat!");
	$("#FAT").hide();
	$("#SKINNY").hide();
	$("body").css("background", "black");
	$("#garfield-message").show();
	$("#fat-or-not").hide();
	$(".slide-show").hide();
	$(".main-buttons").hide();
	$("#firstFat").show();
	$("#pageTitle").hide();
	$("#secondPageload").show();
});

$("#SKINNY").on('click', function(event){
	event.preventDefault();
	alert("im skinny!");
	$("#FAT").hide();
	$("#SKINNY").hide();
	$("body").css("background", "black");
	$("#garfield-message").show();
	$("#fat-or-not").hide();
	$(".slide-show").hide();
	$(".main-buttons").hide();
	$("#pageTitle").hide();
	$("#dancingDog").show();
	$("#Happydance").show();
	$(".locationInfo").show();
});

var slideShowImages=["Everything/images/skinnyslideshow1.png","Everything/images/skinnyslideshow2.png", "Everything/images/skinnyslideshow3.png"];
var otherImages = ["Everything/images/fatslide1.png","Everything/images/fatslide2.png","Everything/images/fatslide3.png"];
var showImage;
var showOtherImages;
var count=0;

function displayImage() {
	$("#skinnySlideShow").html("<img src=" + slideShowImages[count] + " width='100%'>");
	$("#fatslide").html("<img src=" + otherImages[count] + " width='100%'>");
}
// function changeSkinnyDisplay(){
// 	$("#skinnySlideShow").css("border", "lightyellow");
// }

function nextSlide(){
	count++;
	//$("#skinnySlideShow").html("<img src='Everything/images/loading.gif' width='20%'/>");
	if (count === slideShowImages.length){
		count = 0;
	}
	displayImage();
	
}

function nextFTslide(){
	count++;
	//$("#fatslide").html("<img src='Everything/images/loading.gif' width='20%'/>");
	if (count === otherImages.length){
		count=0;
	}
	displayImage();
	
}

function startSlideShow(){
	displayImage();
	showImage = setInterval(nextSlide, 5000);
	showOtherImages = setInterval(nextFTslide, 5000);
}

function stopSlideshow(){
	clearInterval(showImage);
}

$("#firstFat").on('click', function(event){
    event.preventDefault();
    alert("list of unhealthy items from restaurants near yoou!");
});
$("#dancingDog").on('click', function(event){
    event.preventDefault();
    alert("list of healthy items from restaurants near yoou ohhhoooo!");
});


var music1 = new Audio('Everything/music/music-for-sp-icon.wav')
var music2 = new Audio('Everything/music/music-for-popeye.mp3')
				
$("#fatGifs").on('mouseover', function(){
	music1.currentTime=0;
	music1.play();
});

$("#fatGifs").on('mouseout', function(){
	music1.pause();
});

$("#skinnyGifs").on('mouseover', function(){
	music2.currentTime=0;
	music2.play();
});

$("#skinnyGifs").on('mouseout', function(){
	music2.pause();
})

