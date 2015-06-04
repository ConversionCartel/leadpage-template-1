
$(function(){

	var environments = {
      'preview': 0,
      'builder': 1,
      'production': 2,
      'screenshot': 3,
      'local': 4
    };
    var getEnvironment = function () {
        var env;

        if (window.location.pathname.indexOf('preview') !== -1) {
            env = environments.preview; // preview
        } else if (window.location.hostname === 'my.leadpages.net' || window.location.hostname === 'my.leadpagestest.net') {
            env = environments.builder;  // builder
        } else if (window._phantom || window.callPhantom) {
            env = environments.screenshot; // screenshot service
        } else if (window.location.hostname === 'localhost') {
            env = environments.local; // local dev environment
        } else {
            env = environments.production; // production / published LeadPage
        }

        return env;
    };

	if(getEnvironment() !== environments.builder) {
		var bg = $('.bg'),
		bg_parent = $('.banner');

		if(bg[0].src !== '') {
			src = bg[0].src;
			bg_parent.css(
				{'background-image':'url('+src+')'}
			);
			bg.hide();
		}
	} else if(getEnvironment() === environments.builder) {
		$('.builder-only').show();

		$('.js-dismiss').click(function(){
			if($(this).closest('.builder-only').is(':visible')) {
				$(this).closest('.builder-only').remove();
			}
		});
	}
});

