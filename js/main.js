const btnMetro = document.querySelectorAll('#metro nav a');
const boxMetro = document.querySelectorAll('#metro section');

btnMetro.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();

		for (const el of btnMetro) el.classList.remove('on');
		btnMetro[idx].classList.add('on');

		for (const el of boxMetro) el.classList.remove('on');
		boxMetro[idx].classList.add('on');
	});
});
