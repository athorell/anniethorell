(function($){
  "use strict";

  change_header: function() {
  	if ($('.h1').click() || $('.h1').hover()){
  		this.add_new();
  	}
  	if ($('.new').click() || $('.new').hover()) {
  		this.remove_new();
  	}
  },

  add_new: function() {
  	$('.h1').add('.new');
  },

  remove_new: function() {
  	$('.h1').remove('.new');
  }

}(jQuery));