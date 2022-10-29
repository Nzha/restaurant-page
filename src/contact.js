import clearMain from "./clearMain";

function loadContact() {
    // Return if 'menu' div already exists
    const mainDiv = document.querySelector('body > div:first-of-type');
    if (mainDiv && mainDiv.classList.contains('contact')) return;

    // If div doesn't exit yet, clear previous content if any and create 'menu' content
    clearMain();

    const main = document.createElement('div');
    main.classList.add('main', 'contact');
    document.body.appendChild(main);

    const contactHeader = document.createElement('div');
    contactHeader.classList.add('contact-header');
    main.appendChild(contactHeader);

    const title = document.createElement('h1');
    title.textContent = 'CONTACT US';
    contactHeader.appendChild(title);

    const container = document.createElement('div');
    container.classList.add('contact-container');
    main.appendChild(container);

    // LEFT SIDE
    const leftSideContainer = document.createElement('div');
    leftSideContainer.classList.add('contact-left-side-container');
    container.appendChild(leftSideContainer);

    // LEFT SIDE - CONTACT INFO
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    leftSideContainer.appendChild(contactInfo);

    // Address
    const address = document.createElement('div');
    address.classList.add('address');
    contactInfo.appendChild(address);

    const addressIcon = document.createElement('div');
    addressIcon.classList.add('fa-solid', 'fa-location-dot');
    address.appendChild(addressIcon);

    const addressText = document.createElement('div');
    addressText.classList.add('address-text');
    address.appendChild(addressText);

    const addressText1 = document.createElement('p');
    addressText1.textContent = '1024 Oakwood Ave';
    addressText.appendChild(addressText1);

    const addressText2 = document.createElement('p');
    addressText2.textContent = 'San Diego, CA 22434';
    addressText.appendChild(addressText2);

    // Hours
    const hours = document.createElement('div');
    hours.classList.add('hours');
    contactInfo.appendChild(hours);

    // Phone
    const phone = document.createElement('div');
    phone.classList.add('phone');
    contactInfo.appendChild(phone);

    const phoneIcon = document.createElement('i')
    phoneIcon.classList.add('fa-solid', 'fa-phone')
    phone.appendChild(phoneIcon);

    const phoneText = document.createElement('div');
    phoneText.classList.add('phone-text');
    phoneText.textContent = '(222) 888 5555'
    phone.appendChild(phoneText);




    // LEFT SIDE - CONTACT FORM
    const contactForm = document.createElement('div');
    contactForm.classList.add('contact-form');
    leftSideContainer.appendChild(contactForm);

    // RIGHT SIDE
    const rightSideContainer = document.createElement('div');
    rightSideContainer.classList.add('contact-right-side-container');
    container.appendChild(rightSideContainer);

}

export default loadContact;