// feather icon replace
feather.replace();

// my script
const searchBar = document.querySelector('.search-bar');
const iconNav = document.querySelectorAll('.icon-nav');
const searchBtn = document.querySelector('.btn-cari');
const inputSpesifik = document.getElementById('input-spesifik');

// input.oninput = e => {
// 	const value = e.target.value
// 	if (value) e.target.value = e.target.value.substring(0, 1)
// }

function clickEvent(first, last) {
	if (first.value.lenght) {
		document.getElementById(last).focus();
	}
}

inputSpesifik.addEventListener('click', function () {
	console.log(inputSpesifik);
});

searchBtn.addEventListener('click', function () {
	searchBar.classList.toggle('tutup-search');
});

iconNav.forEach((icon, i) => {
	icon.onclick = () => {
		let next = i + 1
		if (next >= iconNav.length) next = 0;
		icon.style.display = "none";
		iconNav[next].style.display = "block";
		searchBar.classList.toggle('tutup-search');
	}
});