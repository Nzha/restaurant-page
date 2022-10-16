import './style.css';
import Background from './bg.jpg';

function component() {
    const element = document.createElement('div');

    const myBackground = new Image();
    myBackground.src = Background;
    element.appendChild(myBackground);

    return element;
}


// document.body.appendChild(component());

console.log('Working!');