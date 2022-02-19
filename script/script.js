// feather icon replace
feather.replace();

// my script
const navbar = document.querySelector('.navbar')
const searchBar = document.querySelector('.search-bar');
const iconNav = document.querySelector('.icon-nav');
const searchBtn = document.querySelector('.btn-cari');

searchBar.addEventListener('click', function () { console.log('button cari') });
iconNav.addEventListener('click', function () {
    searchBar.classList.toggle('tutup-search');
    navbar.classList.toggle('mobile-nav');
});