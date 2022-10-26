import clearMain from "./clearMain";

function loadContact() {
    // Return if 'menu' div already exists
    const mainDiv = document.querySelector('body > div:first-of-type');
    if (mainDiv && mainDiv.classList.contains('contact')) return;

    // If div doesn't exit yet, clear previous content if any and create 'menu' content
    clearMain();

}

export default loadContact;