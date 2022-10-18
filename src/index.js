import './style.css';

const header = document.createElement('header');
document.body.appendChild(header);

function createLogo(firstLine, secondLine) {
    const logo = document.createElement('a');
    logo.classList.add('logo');
    logo.href = '#';
    header.appendChild(logo);

    const logoLine1 = document.createElement('h1');
    logoLine1.textContent = `${firstLine}`;
    logo.appendChild(logoLine1);

    if (typeof secondLine !== 'undefined') {
        const logoLine2 = document.createElement('h1');
        logoLine2.textContent = `${secondLine}`;
        logo.appendChild(logoLine2);
    }

    return logo;
};

createLogo('THE HAPPY', 'LITTLE PIGLET');

function menu() {
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

    const homeLi = document.createElement('li');
    menuUl.appendChild(homeLi);
    const homeA = document.createElement('a');
    homeA.textContent = 'Home';
    homeA.href = '#';
    homeLi.appendChild(homeA);

    const menuLi = document.createElement('li');
    menuUl.appendChild(menuLi);
    const menuA = document.createElement('a');
    menuA.textContent = 'Menu';
    menuA.href = '#';
    menuLi.appendChild(menuA);

    const contactLi = document.createElement('li');
    menuUl.appendChild(contactLi);
    const contactA = document.createElement('a');
    contactA.textContent = 'Contact';
    contactA.href = '#';
    contactLi.appendChild(contactA);

    return menu;
};
