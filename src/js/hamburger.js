$('.header__hamburger').on('click', () => {
	$('.header__menu').toggle(100);
});

$('.header__menu, .header__hamburger').on('click', (e) => {
	e.stopPropagation();
});

$(document).on('click', () => {
	$('.header__menu').hide();
});
