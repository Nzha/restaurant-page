import './style.css';

const header = document.createElement('header');
document.body.appendChild(header);

function createTitle(...lines) {
    const title = document.createElement('a');
    title.classList.add('logo');
    title.href = '#';
    header.appendChild(title);

    for (const line of lines) {
        const titleLine = document.createElement('h1');
        titleLine.textContent = `${line}`;
        title.appendChild(titleLine);
    }
}

createTitle('THE HAPPY', 'LITTLE PIGLET');

function createMenu(...items) {
    // Add checkbox then replace it by ☰ on small screens to create responsive menu
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox_toggle';
    checkbox.classList.add('checkbox_toggle')
    header.appendChild(checkbox);

    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = 'checkbox_toggle';
    checkboxLabel.classList.add('hamburger');
    checkboxLabel.textContent = '☰';
    header.appendChild(checkboxLabel);

    const menuNav = document.createElement('nav');
    menuNav.classList.add('menu');
    header.appendChild(menuNav);

    const menuUl = document.createElement('ul');
    menuUl.classList.add('menu');
    menuNav.appendChild(menuUl);

    for (const item of items) {
        const itemLi = document.createElement('li');
        menuUl.appendChild(itemLi);
        const itemA = document.createElement('a');
        itemA.textContent = `${item}`;
        itemA.href = '#';
        itemLi.appendChild(itemA);
    }
}

createMenu('Home', 'Menu', 'Contact')