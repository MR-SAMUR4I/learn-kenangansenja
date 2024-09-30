// Toogle class active untuk hamburger menu
// Kalau tadinya ada jadi ngga ada

const navbarNav = document.querySelector('.navbar-nav');
// Ketika diluar elemen
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toogle class active untuk form menu
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchBox = document.querySelector('#search-button');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toogle('active');
    searchBox.focus();
    e.preventDefault(); //untuk mengemblikan default
}


// Klik diluar elemen
const hm = document.querySelector('#hamburger-menu'); //carikan id hamburger-menu
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
     if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    
})


