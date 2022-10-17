export default function element(tag, className, id, inputType) {
    const el = document.createElement(`${tag}`);

    if (typeof className !== 'undefined') {
        el.classList.add(`${className}`);
    }

    if (typeof id !== 'undefined') {
        el.id = id;
    }

    if (typeof inputType !== 'undefined') {
        el.type = `${inputType}`;
    }

    return el;
}

// document.body.appendChild(element('header'));