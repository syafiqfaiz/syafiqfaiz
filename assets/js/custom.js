(function($) {
	$(document).ready(function(){
		
		// prettyPhoto
		$('a[data-gal]').each(function() {
			$(this).attr('rel', $(this).data('gal'));
		});  	
		$("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
		
		//text slider
		$("#js-rotating").Morphext({
	    animation: "bounceIn",
	    separator: ",",
	    speed: 1300,
	    complete: function () {
	    }
		});

		//skill bar
		// ruby
		var ruby = new ProgressBar.Circle('#ruby', {
		    color: '#ff1a1a',
		    strokeWidth: 6,
		    trailWidth: 2,
		    duration: 4110,
		    text: {
		        value: 'Ruby'
		    }
		});
		ruby.setText('Ruby')
		// ruby on rails
		var rubyOnRails = new ProgressBar.Circle('#rubyOnRails', {
		    color: '#990000',
		    strokeWidth: 6,
		    trailWidth: 3,
		    duration: 1000,
		    text: {
		        value: 'Ruby On Rails',
		        className: 'centered'
		    }
		});

		// sinatra
		var sinatra = new ProgressBar.Circle('#sinatra', {
		    color: '#ffcc99',
		    strokeWidth: 6,
		    trailWidth: 3,
		    duration: 1400,
		    text: {
		        value: 'Sinatra'
		    }
		});

		// html
		var html = new ProgressBar.Circle('#html', {
		    color: '#ffa64d',
		    strokeWidth: 6,
		    trailWidth: 3,
		    duration: 4600,
		    text: {
		        value: 'HTML'
		    }
		});

		// js
		var javascript = new ProgressBar.Circle('#javascript', {
		    color: '#ff6600',
		    strokeWidth: 6,
		    trailWidth: 3,
		    duration: 1200,
		    text: {
		        value: 'Javascript'
		    }
		});

		// css
		var css = new ProgressBar.Circle('#css', {
		    color: '#ffcc00',
		    strokeWidth: 6,
		    trailWidth: 3,
		    duration: 1570,
		    text: {
		        value: 'CSS'
		    }
		});
		// animate
		function animateAll(){
			ruby.animate(.70);
			rubyOnRails.animate(.85);
			sinatra.animate(.47);
			html.animate(.59);
			javascript.animate(.52);
			css.animate(.44);
		}
		animateAll()

	}); 		
})(jQuery);
