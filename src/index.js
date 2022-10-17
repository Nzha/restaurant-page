import './style.css';
import createEl from './createEl.js'; // param: tag, className, id, inputType

document.body.appendChild(createEl('header'));
const header = document.querySelector('header');

header.appendChild(createEl('a', 'logo', 'logo'));
const logo = document.querySelector('.logo');

logo.appendChild(createEl('h1'));
const logoLine1 = document.querySelector('.logo > h1:first-child')
logoLine1.textContent = 'THE HAPPY';

logo.appendChild(createEl('h1'));
const logoLine2 = document.querySelector('.logo > h1:nth-child(2)')
logoLine2.textContent = 'LITTLE PIGLET';

header.appendChild(createEl('input', 'checkbox_toggle', 'checkbox_toggle', 'checkbox'));
