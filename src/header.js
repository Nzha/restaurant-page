import loadHome from "./home";
import loadMenu from "./menu";

function createHeader() {
    const header = document.createElement('header');
    document.body.appendChild(header);

    header.appendChild(createTitle('THE HAPPY', 'LITTLE PIGLET'));
    header.appendChild(createMenu('Home', 'Menu', 'Contact'));
}

function createTitle(...lines) {
    const title = document.createElement('a');
    title.classList.add('title');
    title.href = '#';

    for (const line of lines) {
        const titleLine = document.createElement('h1');
        titleLine.textContent = `${line}`;
        title.appendChild(titleLine);
    }

    return title;
}

function createMenu(...items) {
    const menu = document.createElement('div');
    menu.classList.add('menu')

    // Add checkbox then replace it by ☰ on small screens to create responsive menu
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox_toggle';
    checkbox.classList.add('checkbox_toggle');
    menu.appendChild(checkbox);

    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = 'checkbox_toggle';
    checkboxLabel.classList.add('hamburger');
    checkboxLabel.textContent = '☰';
    menu.appendChild(checkboxLabel);

    const menuNav = document.createElement('nav');
    menuNav.classList.add('menu');
    menu.appendChild(menuNav);

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
        itemA.addEventListener('click', createMenuLinks);
    }

    return menu;
}

function createMenuLinks(e) {
    if (e.target.textContent === 'Home') {
        loadHome();
    } else if (e.target.textContent === 'Menu') {
        loadMenu();
    } else if (e.target.textContent === 'Contact') {
        loadContact();
    }
}

export default createHeader;