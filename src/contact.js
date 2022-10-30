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

    const addressTextLine1 = document.createElement('p');
    addressTextLine1.textContent = '1024 Oakwood Ave';
    addressText.appendChild(addressTextLine1);

    const addressTextLine2 = document.createElement('p');
    addressTextLine2.textContent = 'San Diego, CA 22434';
    addressText.appendChild(addressTextLine2);

    // Hours
    const hours = document.createElement('div');
    hours.classList.add('hours');
    contactInfo.appendChild(hours);

    const hoursIcon = document.createElement('div');
    hoursIcon.classList.add('fa-solid', 'fa-clock');
    hours.appendChild(hoursIcon);

    const hoursText = document.createElement('div');
    hoursText.classList.add('hours-text');
    hours.appendChild(hoursText);

    const hoursTextLine1 = document.createElement('p');
    hoursTextLine1.textContent = 'Mon-Thurs: 8am-8pm';
    hoursText.appendChild(hoursTextLine1);

    const hoursTextLine2 = document.createElement('p');
    hoursTextLine2.textContent = 'Fri-Sun: 8am-11pm';
    hoursText.appendChild(hoursTextLine2);

    // Phone
    const phone = document.createElement('div');
    phone.classList.add('phone');
    contactInfo.appendChild(phone);

    const phoneIcon = document.createElement('i')
    phoneIcon.classList.add('fa-solid', 'fa-phone')
    phone.appendChild(phoneIcon);

    const phoneText = document.createElement('div');
    phoneText.classList.add('phone-text');
    phoneText.textContent = '(222) 888 5555';
    phone.appendChild(phoneText);

    // LEFT SIDE - CONTACT FORM
    const contactFormContainer = document.createElement('div');
    contactFormContainer.classList.add('contact-form-container');
    leftSideContainer.appendChild(contactFormContainer);

    // Title
    const formTitle = document.createElement('div');
    formTitle.classList.add('form-title');
    contactFormContainer.appendChild(formTitle);

    const formTitleIcon = document.createElement('i')
    formTitleIcon.classList.add('fa-solid', 'fa-envelope')
    formTitle.appendChild(formTitleIcon);

    const formTitleText = document.createElement('div');
    formTitleText.classList.add('form-title-text');
    formTitleText.textContent = 'MESSAGE US';
    formTitle.appendChild(formTitleText);

    // Form
    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');
    contactFormContainer.appendChild(contactForm);

    const fullNameLabel = document.createElement('label');
    fullNameLabel.setAttribute('for', 'fullName');
    fullNameLabel.textContent = 'Full Name';
    contactForm.appendChild(fullNameLabel);

    const fullName = document.createElement('input');
    fullName.setAttribute('type', 'text');
    fullName.setAttribute('id', 'fullName');
    fullName.setAttribute('name', 'fullName');
    fullName.setAttribute('placeholder', 'Full Name');
    fullName.required = true;
    contactForm.appendChild(fullName);

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email';
    contactForm.appendChild(emailLabel);

    const email = document.createElement('input');
    email.setAttribute('type', 'text');
    email.setAttribute('id', 'email');
    email.setAttribute('name', 'email');
    email.setAttribute('placeholder', 'Email');
    email.required = true;
    contactForm.appendChild(email);

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'email');
    messageLabel.textContent = 'Message';
    contactForm.appendChild(messageLabel);

    const textArea = document.createElement('textarea');
    textArea.setAttribute('type', 'text');
    textArea.setAttribute('id', 'message');
    textArea.setAttribute('name', 'message');
    textArea.setAttribute('placeholder', 'Type your message...');
    textArea.required = true;
    contactForm.appendChild(textArea);

    const button = document.createElement('button');
    button.textContent = 'SEND';
    contactForm.appendChild(button);

    // RIGHT SIDE
    const rightSideContainer = document.createElement('div');
    rightSideContainer.classList.add('contact-right-side-container');
    container.appendChild(rightSideContainer);

    const map = document.createElement('iframe');
    map.setAttribute("src", 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d104181.6980894408!2d149.12978300000003!3d-35.31398!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164d69b05c9021%3A0x500ea6ea7695660!2sCanberra%20ACT%202601%2C%20Australia!5e0!3m2!1sen!2sus!4v1667129106504!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
    rightSideContainer.appendChild(map);

}

export default loadContact;