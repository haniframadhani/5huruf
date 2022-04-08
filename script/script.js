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

// close search dan search word
searchBtn.onclick = () => {
	// search word
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
	const inputTermasukSplit = inc.split(/,\s*/); //input
	const inputTidakTermasukSplit = exc.split(/,\s*/); //input
	fetch('word-list/word-list.json')
		.then(response => response.json())
		.then(response => {
			const kata = response.indonesia;
			let card = '';
			// console.log(inputSpesifik);
			// console.log(inputTermasukSplit);
			// console.log(inputTidakTermasukSplit);
			// if (inputTermasukSplit != '' || inputTidakTermasukSplit != '') {
			// if (k.includes(inputTidakTermasukSplit) == false) {
			// 	if (k.includes(inputTermasukSplit) == true) {
			// 		card += showResult(k);
			// 	}
			// }
			const resultInc = kata.filter(val => inputTermasukSplit.every(v => val.includes(v)));
			const resultExc = kata.filter(val => inputTidakTermasukSplit.every(v => !val.includes(v)));
			// output
			if (inputTermasukSplit != '' && inputTidakTermasukSplit != '') {
				// mencari kata dengan huruf tertentu di resultInc
				const resultIncExc = resultInc.filter(val => inputTidakTermasukSplit.every(v => val.includes(v)));
				// membuang kata di resultInc yang sama dengan resultIncExc
				const finalResult = resultInc.filter((e) => resultIncExc.indexOf(e) === -1);
				// const finalResult = resultInc.filter(val => resultIncExc.every(v => !val.includes(v)));
				if (finalResult == '') {
					card = showEmpty();
				}
				finalResult.forEach(r => card += showResult(r));
			} else if (inputTermasukSplit != '' && inputTidakTermasukSplit == '') {
				if (resultInc == '') {
					card = showEmpty();
				}
				resultInc.forEach(r => card += showResult(r));
			} else if (inputTermasukSplit == '' && inputTidakTermasukSplit != '') {
				if (resultExc == '') {
					card = showEmpty();
				}
				resultExc.forEach(r => card += showResult(r));
			} else if (inputTermasukSplit == '' && inputTidakTermasukSplit == '') {
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
			<img class="illustration img-fluid" src="asset/img/searching.svg">
		</div>
	`
}

function showEmpty() {
	return `
		<div class="empty-state empty text-center">
			<h3 class="empty-state">kata tidak ditemukan</h3>
			<p>beritahu jika kata tersebut benar-benar ada beritahu <a href="https://forms.gle/3ykaxYQXUcac3uM27" target="_blank" rel="noopener noreferer">disini</a></p>
			<img class="illustration img-fluid" src="asset/img/empty.svg">
		</div>
	`
}