export function updateUI(route) {
    const sections = $$('section');
    const activeSection = $(`[data-route=${route}]`);

    sections.forEach(section => {
        section.classList.remove('active')
    });

    activeSection.classList.add('active')
}

export function $(element){
    return document.querySelector(element)
}

export function $$(elements){
    return document.querySelectorAll(elements)
}
