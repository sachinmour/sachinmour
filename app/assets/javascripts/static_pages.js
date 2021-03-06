$(document).on('turbolinks:load', function(event) {
  event.preventDefault();

  /*global ga*/
    if (typeof(ga) === "function") {
        ga("set", "location", event.originalEvent.data.url);
        ga("send", "pageview");
    }

  function is_touch_device() {
		return 'ontouchstart' in window // works on most browsers 
		|| navigator.maxTouchPoints; // works on IE10/11 and Surface
	};

	if (!is_touch_device()) {
	    $('div.info').hide();
	    $('div.project').on({
			mouseenter: function() {
			    var $this = $(this);
			    $this.find('.info').slideDown('fast');
			},
			mouseleave: function() {
			    var $this = $(this);
			    $this.find('.info').slideUp('fast');
			}
	    });
	}

});