$('.header__search').on('click', () => {
	$('.header__input').toggle(100);
});

$('.header__form').on('click', (e) => {
	e.stopPropagation();
});

$(document).on('click', () => {
	$('.header__input').hide();
});
