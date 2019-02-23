$(document).ready(function () {

 //Slick slider
 $(".main_slider").slick({
 	infinite:true,
 	draggable: false,
	//	fade: true,
	dots: false,
	arrows: true,
	autoplay: true,
	speed: 900,
	autoplaySpeed: 4000,
	pauseOnDotsHover:true,
	pauseOnHover:false,
	cssEase: 'ease',
 // vertical: true,
 prevArrow: $('#left_arrow'),
 nextArrow: $('#right_arrow')
});

	//Sticky sidebar
	block_pos = $('.about_box_item').offset().top;
	wrap_pos = $('.about_wrapper').offset().top; 
	block_height = $('.about_box_item').outerHeight(); 
	wrap_height = $('.about_wrapper').outerHeight(); 
	block_width = $('.about_box_item').outerWidth(); 
	pos_absolute = wrap_pos + wrap_height - block_height;
	$(window).scroll(function () {
		if ($(window).scrollTop() > pos_absolute) {

			$('.about_box_item').css({
				'position': 'absolute',
				'top': wrap_height - block_height,
				'width': block_width
			});
		}
		else if ($(window).scrollTop() > block_pos) { 

			$('.about_box_item').css({
				'position': 'fixed',
				'top': '0px',
				'width': block_width
			}); 
		} else {

			$('.about_box_item').css({
				'position': 'static'
			}); 
		}
	});

//Isotope
var $grid = $('.portfolio_container').isotope({
	itemSelector: '.portfolio_item',
	stagger: 30
});

$('.filter_button_group').on( 'click', 'li', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });

	$('.filter_button_group li').removeClass('active');
	$(this).addClass('active');
});

	//Parallax
	var $window = $(window);
	if($('div[data-type="background"]').length){
		$('div[data-type="background"]').each(function(){

			var $obj = $(this);
			var offset = $obj.offset().top;

			$(window).scroll(function()
			{
				offset = $obj.offset().top;

				if ($window.scrollTop() > (offset - window.innerHeight))
				{
					var yPos = -(($window.scrollTop() - offset) / 2 );
					var coords = '50% ' + ( yPos ) + 'px';
					$obj.css({ backgroundPosition:  coords });
				}
			});
			$(window).resize(function()
			{
				offset = $obj.offset().top;
			});
		});
	}

});

//Menu overlay animation
(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
	overlay = document.querySelector( 'div.overlay' ),
	closeBttn = overlay.querySelector( 'button.overlay-close' );
	transEndEventNames = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'msTransition': 'MSTransitionEnd',
		'transition': 'transitionend'
	},
	transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
	support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();

//Input underline animation
const wrapper = document.querySelector(".input-wrapper"),
textInput = document.querySelector("input[type='email']");        
textInput.addEventListener("keyup", event => {
	wrapper.setAttribute("data-text", event.target.value);
});