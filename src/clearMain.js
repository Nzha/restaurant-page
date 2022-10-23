function clearMain(page) {
    const mainDiv = document.querySelector('body > .main');
    if (mainDiv) mainDiv.parentNode.removeChild(mainDiv);
}

export default clearMain;