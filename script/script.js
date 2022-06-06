// feather icon replace
feather.replace();

// my script

// DOM selector
const searchBar = document.querySelector('.search-bar');
const iconNav = document.querySelectorAll('.icon-nav');
const searchBtn = document.querySelector('.btn-cari');
const inputSpesifikPertama = document.getElementById('pertama');
const inputSpesifikKedua = document.getElementById('kedua');
const inputSpesifikKetiga = document.getElementById('ketiga');
const inputSpesifikKeempat = document.getElementById('keempat');
const inputSpesifikKelima = document.getElementById('kelima');
const inputTermasuk = document.getElementById('termasuk');
const inputTidakTermasuk = document.getElementById('tidak-termasuk');
const hasilHtml = document.querySelector('.hasil');
const myModal = new bootstrap.Modal(document.getElementById("modal"));
const modal = document.querySelector('.tutorial');
const dontShowBtn = document.querySelector('.jangan-tampil');

// close search dan search word
searchBtn.onclick = () => {
	// search word
	inputSpesifikPertama.value = inputSpesifikPertama.value.toLowerCase();
	inputSpesifikKedua.value = inputSpesifikKedua.value.toLowerCase();
	inputSpesifikKetiga.value = inputSpesifikKetiga.value.toLowerCase();
	inputSpesifikKeempat.value = inputSpesifikKeempat.value.toLowerCase();
	inputSpesifikKelima.value = inputSpesifikKelima.value.toLowerCase();
	searchWord(inputSpesifikPertama.value, inputSpesifikKedua.value, inputSpesifikKetiga.value, inputSpesifikKeempat.value, inputSpesifikKelima.value, inputTermasuk.value, inputTidakTermasuk.value);

	// change icon
	iconNav.forEach((icon, i) => {
		let index = 1;
		if (index > iconNav.length) index = 0;
		const display = iconNav[index - 1].style.display;
		index++;
		display == "none" ? (icon.style.display = "block") : (icon.style.display = "none");
	});

	// close search
	tutupSearch();
};

// open & close search when icon click
iconNav.forEach((icon, i) => {
	// change icon
	icon.onclick = () => {
		let next = i + 1;
		if (next >= iconNav.length) next = 0;
		icon.style.display = "none";
		iconNav[next].style.display = "block";

		// close search
		tutupSearch();
	}
});

// autofocus spesific letter
function clickEvent(first, last) {
	if (first.value.length) {
		document.getElementById(last).focus();
	}
}

// close search
function tutupSearch() {
	searchBar.classList.toggle('tutup-search');
}

// search word
function searchWord(p1, p2, p3, p4, p5, inc, exc) {
	const inputSpesifik = [p1, p2, p3, p4, p5]; //input
	const inputTermasukSplit = inc.toLowerCase().split(/,\s*/); //input
	const inputTidakTermasukSplit = exc.toLowerCase().split(/,\s*/); //input
	fetch('word-list/word-list.json')
		.then(response => response.json())
		.then(response => {
			const kata = response.indonesia;
			let card = '';
			const resultInc = kata.filter(val => inputTermasukSplit.every(v => val.includes(v)));
			const resultExc = kata.filter(val => inputTidakTermasukSplit.every(v => !val.includes(v)));
			// output
			if (inputTermasukSplit != '' && inputTidakTermasukSplit != '' && inputSpesifik.some(Boolean) == true) { // 1 1 1
				const resultIncExc = resultInc.filter(val => inputTidakTermasukSplit.every(v => !val.includes(v)));
				// Di code tersebut, saya bikin supaya ngecek pertama-tama apakah si val2 ini berupa string kosong atau bukan. Kalau memang string kosong, maka otomatis dibikin true (karena bisa ngematch semua karakter pengennya). Kalau bukan string kosong maka di cek apakah di variable val pada index yang sama dengan val2 (index nya adalah i) sama dengan val2.
				// penjelasan kode dibawah
				const finalResult = resultIncExc.filter(val => inputSpesifik.every((val2, i) => val2 ? val[i] === val2 : true));
				if (finalResult == '') {
					card = showEmpty();
				}
				finalResult.forEach(r => card += showResult(r));
			} else if (inputTermasukSplit != '' && inputTidakTermasukSplit == '' && inputSpesifik.some(Boolean) == true) { // 1 0 1
				const finalResult = resultInc.filter(val => inputSpesifik.every((val2, i) => val2 ? val[i] === val2 : true));
				if (finalResult == '') {
					card = showEmpty();
				}
				finalResult.forEach(r => card += showResult(r));
			} else if (inputTermasukSplit == '' && inputTidakTermasukSplit != '' && inputSpesifik.some(Boolean) == true) { // 0 1 1
				const finalResult = resultExc.filter(val => inputSpesifik.every((val2, i) => val2 ? val[i] === val2 : true));
				if (finalResult == '') {
					card = showEmpty();
				}
				finalResult.forEach(r => card += showResult(r));
			} else if (inputTermasukSplit == '' && inputTidakTermasukSplit == '' && inputSpesifik.some(Boolean) == true) { // 0 0 1
				const finalResult = kata.filter(val => inputSpesifik.every((val2, i) => val2 ? val[i] === val2 : true));
				if (finalResult == '') {
					card = showEmpty();
				}
				finalResult.forEach(r => card += showResult(r));
			} else if (inputTermasukSplit != '' && inputTidakTermasukSplit != '' && inputSpesifik.some(Boolean) == false) { // 1 1 0
				// mencari kata dengan huruf tertentu di resultInc
				const resultIncExc = resultInc.filter(val => inputTidakTermasukSplit.every(v => !val.includes(v)));
				// membuang kata di resultInc yang sama dengan resultIncExc
				const finalResult = resultInc.filter((e) => resultIncExc.indexOf(e) > -1);
				if (finalResult == '') {
					card = showEmpty();
				}
				finalResult.forEach(r => card += showResult(r));
			} else if (inputTermasukSplit != '' && inputTidakTermasukSplit == '' && inputSpesifik.some(Boolean) == false) { // 1 0 0
				if (resultInc == '') {
					card = showEmpty();
				}
				resultInc.forEach(r => card += showResult(r));
			} else if (inputTermasukSplit == '' && inputTidakTermasukSplit != '' && inputSpesifik.some(Boolean) == false) { // 0 1 0
				if (resultExc == '') {
					card = showEmpty();
				}
				resultExc.forEach(r => card += showResult(r));
			} else if (inputTermasukSplit == '' && inputTidakTermasukSplit == '' && inputSpesifik.some(Boolean) == false) { // 0 0 0
				card = showBlank();
			}

			hasilHtml.innerHTML = card;
		});
}

function showResult(word) {
	return `
		<div class="col-md-3 col-6 my-2 text-center">
			<div class="card">
				<div class="card-body kata">
					<p class="m-0">${word}</p>
				</div>
			</div>
		</div>
	`
}

function showBlank() {
	return `
		<div class="empty-state blank text-center">
			<h3 class="error-message">kamu tidak mengisikan apapun</h3>
			<p>berikan sedikit petunjuk untuk dapat menemukan kata yang kamu cari</p>
			<img class="illustration img-fluid" src="asset/img/searching.svg" alt="illustrasi tidak menginputkan apapun">
		</div>
	`
}

function showEmpty() {
	return `
		<div class="empty-state empty text-center">
			<h3 class="empty-state">kata tidak ditemukan</h3>
			<p>beritahu jika kata tersebut benar-benar ada beritahu <a href="https://forms.gle/3ykaxYQXUcac3uM27" target="_blank" rel="noopener noreferer">disini</a></p>
			<img class="illustration img-fluid" src="asset/img/empty.svg" alt="illustrasi pencarian tidak ditemukan">
		</div>
	`
}


function setCookie(condition) {
	document.cookie = "janganTampil=" + condition + ";path=/";
}

function getCookie(condition) {
	let kondisi = condition + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(kondisi) == 0) {
			return c.substring(kondisi.length, c.length);
		}
	}
	return '';
}

function checkCookie() {
	let tampil = getCookie("janganTampil");
	if (tampil != 'true') {
		myModal.show();
	}
}


modal.addEventListener('click', () => {
	myModal.show();
});

dontShowBtn.addEventListener('click', () => {
	let dontShow = true;
	setCookie(dontShow);
});