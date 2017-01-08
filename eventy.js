var carouselList = $("#carousel ul");

$(function(){
	console.log('DOM załadowany - można się bawić');
});
$(setInterval(changeSlide, 3000);{

	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
});
$(function(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
});

