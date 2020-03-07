jQuery(document).ready(function(){
	var degress = 0;
	timer = setInterval(function(){
		degress++;
		jQuery('body').css('background-image', 'linear-gradient('+degress+'deg, #000, #999)');
	}, 10/360);
});