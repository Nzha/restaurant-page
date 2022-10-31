function loadFooter() {
    const footer = document.createElement('footer');
    document.body.appendChild(footer);

    const gitHubLink = document.createElement('a');
    gitHubLink.href = 'https://github.com/Nzha/restaurant-page"';
    gitHubLink.target = '_blank';
    footer.appendChild(gitHubLink);

    const gitHubIcon = document.createElement('div');
    gitHubIcon.classList.add('fa-brands', 'fa-github');
    gitHubLink.appendChild(gitHubIcon);

    const gitHubUsername = document.createElement('div');
    gitHubUsername.classList.add('text');
    gitHubUsername.textContent = 'Nzha';
    gitHubLink.appendChild(gitHubUsername);

}

export default loadFooter;