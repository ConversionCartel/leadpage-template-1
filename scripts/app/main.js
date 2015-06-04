$(function(){
	var bg = $('.bg'),
		bg_parent = $('.banner');

	if(bg[0].src !== '') {
		src = bg[0].src;
		bg_parent.css(
			{'background-image':'url('+src+')'}
		);
		bg.hide();
	}
});
