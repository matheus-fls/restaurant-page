import './styles.scss';
import layout from './js/layout';
import home from './js/home';
import about from './js/about';
import contact from './js/contact';
import menus from './js/menus';

document.getElementById('content').innerHTML = layout();

const mainContent = (tab) => document.querySelector('main').innerHTML = tab;

document.querySelector('#contact').addEventListener('click', () => {
  mainContent(contact());
});

document.querySelector('#menus').addEventListener('click', () => {
  mainContent(menus());
});

document.querySelector('#about').addEventListener('click', () => {
  mainContent(about());
});

document.querySelector('#home').addEventListener('click', () => {
  mainContent(home());
});

document.querySelector('#home').click();
