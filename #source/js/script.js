let user_icon = document.querySelector('.user-header__icon'),
	 user_menu = document.querySelector('.user-header__menu'),
	 user_header = document.querySelector('.user-header');
	 list = document.querySelector('.menu__list'),
	 // li = document.querySelectorAll('li');

user_icon.addEventListener('click', () => {
	user_menu.classList.toggle('active');
});

document.addEventListener('click', event => {
	const target = event.target;
	if(!target.closest('.user-header')) {
		user_menu.classList.remove('active');
	}
});

// toggle active menu links

// for (let i = 0; i < li.length; i++){
// 	li[i].addEventListener('click', function() {
// 		let link = li[i].querySelector('.menu__link');
// 		let current = document.getElementsByClassName('active');
// 		current[0].className = current[0].className.replace('active', '');
// 		link.className += ' active';
// 	});
// };
