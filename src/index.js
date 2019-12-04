import './styles.scss';
import {home} from './js/home.js';
import {about} from './js/about';
import {contact} from './js/contact';
import {menus} from './js/menus';

document.querySelector('#contact').addEventListener('click', () => {
  document.querySelector('main').innerHTML = contact;
});

document.querySelector('#menus').addEventListener('click', () => {
  document.querySelector('main').innerHTML = menus;
});

document.querySelector('#about').addEventListener('click', () => {
  document.querySelector('main').innerHTML = about;
});

document.querySelector('#home').addEventListener('click', () => {
  document.querySelector('main').innerHTML = home;
});

document.querySelector('#home').click();
