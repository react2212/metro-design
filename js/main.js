const btnMetro = document.querySelectorAll('#metro nav a');
const boxMetro = document.querySelectorAll('#metro section');
const btnFooter = document.querySelector('footer .toggle');

btnMetro.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();

		for (const el of btnMetro) el.classList.remove('on');
		btnMetro[idx].classList.add('on');

		for (const el of boxMetro) el.classList.remove('on');
		boxMetro[idx].classList.add('on');

		setTimeout(() => {
			for (const el of boxMetro) el.classList.remove('active');
			boxMetro[idx].classList.add('active');
		}, 0);
	});
});

//footer토글버튼 이벤트
btnFooter.addEventListener('click', (e) => {
	e.preventDefault();
	e.currentTarget.parentElement.classList.toggle('on');
});
