import './index.css';

const open = document.querySelector('.open');
const close = document.querySelector('.close');
const background = document.querySelector('.background');

open.addEventListener('click', function () {
    background.style.display = 'visible';
});

close.addEventListener('click', function () {
    background.style.display = 'none';
});
