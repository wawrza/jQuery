// plik jQuery.js 

var div = $("div").css("padding", "5px 5px"),
  span = $("span");

  $("span:odd").css('color','red');

  var paragraphs = $('p');

  paragraphs.each(function(index, element) {

    button = '<button class="btn" data-tmp="' + index + '">Click me</button>'

  $(element).append(button)

});

	$("button").click(function(){
	   alert($(this).attr("data-tmp"));
});