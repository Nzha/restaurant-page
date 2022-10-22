function loadHome() {

    // Return if 'home' div already exists
    const test = document.querySelector('body > div:first-of-type');
    if (test && test.classList.contains('home')) return;

    // If div doesn't exit yet, create it
    const main = document.createElement('div');
    main.classList.add('main', 'home');
    document.body.appendChild(main);

    const backgroundImg = document.createElement('div');
    backgroundImg.classList.add('bg-img');
    main.appendChild(backgroundImg);

    const backgroundTxt = document.createElement('div');
    backgroundTxt.classList.add('bg-text');
    backgroundImg.appendChild(backgroundTxt);

    const title = document.createElement('h1');
    title.textContent = 'THE SMOKO ROOM'
    backgroundTxt.appendChild(title);

    const description = document.createElement('p');
    description.textContent = 'Having moved from the original site in Toronto, the Happy Little Piglet has been turning out meats from premises just out of Canberra since February 2022. The end of October 2022 we opened the doors to visitors and locals to experience the kind of hospitality The Happy Little Piglet is about - straight forward and generous.'
    backgroundTxt.appendChild(description);

    return main;
}

export default loadHome;