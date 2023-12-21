window.addEventListener('load', () => {
	const imgs = document.querySelectorAll('.pic img');
	imgs.forEach((el) => {
		const card = el.closest('.cards');

		const colorThief = new ColorThief();
		const mainColor = colorThief.getColor(el);
		const colorP = colorThief.getPalette(el, 10);
		card.style.background = `linear-gradient(45deg, rgb(${mainColor}),50%, rgb(${colorP[2]})50%)`;

		const sns_a = card.querySelectorAll('.sns a');
		sns_a.forEach((el) => {
			el.style.backgroundColor = `rgb(${colorP[1]})`;
			el.addEventListener('mouseenter', () => {
				el.style.backgroundColor = `rgb(${colorP[5]})`;
			});
			el.addEventListener('mouseleave', () => {
				el.style.backgroundColor = `rgb(${colorP[1]})`;
			});
		});
	});
});
