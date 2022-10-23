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

    const menu = document.createElement('div');
    menu.classList.add('menu-content');
    main.appendChild(menu);

    // LEFT COLUMN
    const leftColumn = document.createElement('div');
    leftColumn.classList.add('left-column');
    menu.appendChild(leftColumn);

    // const menuCategory = document.createElement('div');
    // menuCategory.classList.add('menu-category');
    // leftColumn.appendChild(menuCategory);

    leftColumn.appendChild(
        createMenuItem(
            'BRISKET',
            'chopped or sliced'
        )
    )

    // RIGHT COLUMN
    const rightColumn = document.createElement('div');
    rightColumn.classList.add('right-column');
    menu.appendChild(rightColumn);

    rightColumn.appendChild(
        createMenuItem(
            'CAROLINA ON MY MIND',
            'chopped pork shoulder, crispy skin, spicy vinegar sauce, coleslaw, sesame bun'
        )
    )

}

function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('h2');
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);

    return menuItem;
}

export default loadMenu;