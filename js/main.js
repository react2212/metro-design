const btnMetro = document.querySelectorAll('#metro nav a');
const boxMetro = document.querySelectorAll('#metro section');
const btnFooter = document.querySelector('footer .toggle');
const mapFrame = document.querySelector('#location');
const mapInfo = mapFrame.querySelector('.mapInfo');

//메트로 탭메뉴 토글 버튼
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

//지도 연결 코드
const mapContainer = document.querySelector('#map');
const mapOption = {
	center: new kakao.maps.LatLng(33.450701, 126.570667),
	level: 3,
};
const map = new kakao.maps.Map(mapContainer, mapOption);

//마커 인스턴스 생성
const marker = new kakao.maps.Marker({
	position: mapOption.center,
});
marker.setMap(map);

//mapInfo패널 이벤트 연결
mapInfo.addEventListener('click', () => {
	mapInfo.classList.add('off');
});
mapFrame.addEventListener('mouseleave', () => {
	mapInfo.classList.remove('off');
});
