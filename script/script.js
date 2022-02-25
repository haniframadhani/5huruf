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


searchBtn.onclick = () => {
	iconNav.forEach((icon, i) => {
		let index = 1;
		if (index > iconNav.length) index = 0;
		const display = iconNav[index - 1].style.display;
		index++;
		display == "none" ? (icon.style.display = "block") : (icon.style.display = "none");
	});
	searchBar.classList.toggle('tutup-search');
};

iconNav.forEach((icon, i) => {
	icon.onclick = () => {
		let next = i + 1;
		if (next >= iconNav.length) next = 0;
		icon.style.display = "none";
		iconNav[next].style.display = "block";
		searchBar.classList.toggle('tutup-search');
	}
});

function clickEvent(first, last) {
	if (first.value.length) {
		document.getElementById(last).focus();
	}
}