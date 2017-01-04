// plik jQuery.js 

var div = $("div").css("padding", "5px 5px");
	span = $("span");
	
	span.each(function(index, element) {
});

	$("span:odd").css('color','red');

	paragraphs = $('p');

	paragraphs.each(function(index, element) {

	button = '<button class="btn" data-tmp="' + index + '">Click me</button>'

	$(element).append(button) 

});

	$("button").click(function(){
	alert($(this).attr("data-tmp"));
});