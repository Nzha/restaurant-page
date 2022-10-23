import clearMain from "./clearMain";

function loadMenu() {
    // Return if 'menu' div already exists
    const mainDiv = document.querySelector('body > div:first-of-type');
    if (mainDiv && mainDiv.classList.contains('menu')) return;

    // If div doesn't exit yet, clear previous content if any and create 'menu' content
    clearMain();

    const main = document.createElement('div');
    main.classList.add('main', 'menu');
    document.body.appendChild(main);

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    main.appendChild(menuHeader);

    const title = document.createElement('h1');
    title.textContent = 'MENU';
    menuHeader.appendChild(title);

    const description = document.createElement('p');
    description.textContent = 'A culinary tour of BBQ traditions from around this great nation and this beautiful planet. 1.8 million years ago, humans first began cooking meat with fire. For some reason, this hasn’t led to world peace, but we’re pretty sure if we fire up enough BBQ, it will.';
    menuHeader.appendChild(description);
}

export default loadMenu;