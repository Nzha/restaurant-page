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

    leftColumn.appendChild(
        createMenuItem(
            'PLATTERS AND COMBOS',
            'Creating the *perfect* palette of Federalist Pig flavors is an art. And we’re artists. Served with Texas toast & pickles.',
            'h2'
        )
    )
    leftColumn.appendChild(
        createMenuItem(
            'TWO STEP',
            'pick any 2 meats & 2 small sides'
        )
    )
    leftColumn.appendChild(
        createMenuItem(
            'RIB & CHICKEN',
            '1/2 lb. of ribs, 1/4 chicken & 2 small sides'
        )
    )
    leftColumn.appendChild(
        createMenuItem(
            'SAMPLER PLATTER',
            'pick any 3 meats & 2 small sides'
        )
    )
    leftColumn.appendChild(
        createMenuItem(
            'PITMASTER SPECIAL FOR 2',
            'pick any 4 meats & 3 small sides'
        )
    )
    leftColumn.appendChild(
        createMenuItem(
            'FEED THE FAM',
            '1/2 lb. brisket, 1/2 lb. chopped pork, 1/2 lb. chicken, 1 lb. pork rib tips & 4 large sides'
        )
    )
    leftColumn.appendChild(
        createMenuItem(
            'SIDES',
            'A wise leader once said that unless both sides win, no agreement can be permanent. So — just agree to get more sides later.',
            'h2'
        )
    )
    leftColumn.appendChild(
        createMenuItem(
            'SMOKED CHEDDAR MAC & CHEESE',
            'shell pasta baked with smoked cheddar and jack cheese'
        )
    )
    leftColumn.appendChild(
        createMenuItem(
            'CRISPY BRUSSELS SPROUTS',
            'fried and seasoned with Fed Pig BBQ rub'
        )
    )
    leftColumn.appendChild(
        createMenuItem(
            'CHIPOTLE GARLIC GREEN BEANS',
            'sautéed with roasted garlic and chipotle peppers'
        )
    )
    leftColumn.appendChild(
        createMenuItem(
            'RED BLISS POTATO SALAD',
            'southern style potato salad with chopped pickles, celery, and hard boiled eggs'
        )
    )
    leftColumn.appendChild(
        createMenuItem(
            'CLASSIC COLESLAW',
            'carolina style chopped cabbage slaw'
        )
    )
    leftColumn.appendChild(
        createMenuItem(
            'BBQ BEANS',
            'smokey, savory, and a little sweet'
        )
    )
    leftColumn.appendChild(
        createMenuItem(
            'LOADED FRIES',
            'seasoned fries topped with pulled pork, melted cheese, ranch, and BBQ sauce'
        )
    )

    // RIGHT COLUMN
    const rightColumn = document.createElement('div');
    rightColumn.classList.add('right-column');
    menu.appendChild(rightColumn);

    rightColumn.appendChild(
        createMenuItem(
            'SIGNATURE SANDWICHES',
            'When bread meets what could go between bread, there’s no end to the culinary possibilities.',
            'h2'
        )
    )
    rightColumn.appendChild(
        createMenuItem(
            'CAROLINA ON MY MIND',
            'chopped pork shoulder, crispy skin, spicy vinegar sauce, coleslaw, sesame bun'
        )
    )
    rightColumn.appendChild(
        createMenuItem(
            'MUSIC CITY',
            'spicy fried chicken breast, greens, pickles, buttermilk ranch, sesame bun'
        )
    )
    rightColumn.appendChild(
        createMenuItem(
            'BIG CHEESE',
            'chopped pork or brisket, melted cheese, crispy onions, BBQ sauce, sesame bun'
        )
    )
    rightColumn.appendChild(
        createMenuItem(
            'CLUB',
            'smoked turkey, crispy pork belly, avocado, tomato, garlic aioli, texas toast'
        )
    )
    rightColumn.appendChild(
        createMenuItem(
            'JIVE TURKEY',
            'smoked turkey, melted cheese, grilled tomato, crispy onions, ranch, BBQ sauce, texas toast'
        )
    )

}

function createMenuItem(name, description, heading = 'h3') {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement(heading);
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);

    return menuItem;
}

export default loadMenu;