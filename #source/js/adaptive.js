$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
	let menuBody=$('.menu__body');
	let headerRegion=$('.actions-header__region');
	if(w<767){
		if(!headerRegion.hasClass('done')){
			headerRegion.addClass('done').appendTo(menuBody);
		}
	}else{
		if(headerRegion.hasClass('done')){
			headerRegion.removeClass('done').prependTo($('.header__actions'));
		}
	}
	if(w<767){
		if(!$('.footer__info').hasClass('done')){
			$('.footer__info').addClass('done').appendTo($('.footer__column').eq(2));
		}
	}else{
		if($('.footer__info').hasClass('done')){
			$('.footer__info').removeClass('done').prependTo($('.footer__column').eq(0));
			$('.footer__logo').prependTo($('.footer__column').eq(0));
		}
	}
}
	/*if(w<767){
		if(!$('.header-bottom-menu').hasClass('done')){
			$('.header-bottom-menu').addClass('done').appendTo(headerMenu);
		}
	}else{
		$.each($('.header-bottom-menu'), function(index, val) {
			if($(this).hasClass('header-bottom-menu--right')){
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
				}
			}else{
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
				}
			}
		});
	}*/

function adaptive_function() {
	let w=$(window).outerWidth();
	let h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();