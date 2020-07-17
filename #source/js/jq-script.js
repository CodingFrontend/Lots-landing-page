$('.icon-menu').click(function(event){
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	if($(this).hasClass('active')){
		$('body').data('scroll',$(window).scrollTop());
	}
		$('body').toggleClass('lock');
	
})


function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

$('.nav-newsmedia__item').click(function(event){
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('.tabs').find('.tab__content').removeClass('active').eq($(this).index()).addClass('active');
});

$(document).ready(function(){
	$('.main-slider__body').slick({
		prevArrow: $('.control-main-slider__arrow_prev'),
      nextArrow: $('.control-main-slider__arrow_next'),
      adaptiveHeight: true,
	});
});

$(document).ready(function(){
	$('.slider-lots__body').slick({
		prevArrow: $('.control-slider-lots__arrow_prev'),
      nextArrow: $('.control-slider-lots__arrow_next'),
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive:[
	      {
	      	breakpoint: 768,
	      	settings: {
	      		slidesToShow: 2,
      			slidesToScroll: 2,
	      	}
	      },
	        {
	      	breakpoint: 550,
	      	settings: {
	      		slidesToShow: 1,
      			slidesToScroll: 1,
	      	}
	      },
	   ]
	});
});

$(document).ready(function(){
	$('.slider-quotes__slide').slick({
		prevArrow: $('.control-slider-quotes__link'),
      nextArrow: $('.control-slider-quotes__link'),
     	fade: true,
     	adaptiveHeight: true,
	});
});

// Переход к якорю

$(document).ready(function(){
  // = Вешаем событие прокрутки к нужному месту
  //	 на все ссылки якорь которых начинается на #
	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault()

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - ($('.header__container').height() + 25)
		}, 1000, 'linear', function(){
			location.hash =  $(this).attr("href");
		});
		return false;
	});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		// if (scrollDistance >= 850) {
		// 		$('nav').fadeIn("fast");
		// } else {
		// 		$('nav').fadeOut("fast");
		// }
	
		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.menu__list a.active').removeClass('active');
						$('.menu__list a').eq(i).addClass('active');
				}
		});
}).scroll();