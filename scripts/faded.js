const containers = document.querySelectorAll('.projectContainer');

window.addEventListener('scroll', () => {
    const centerY = window.innerHeight / 2;

    containers.forEach(container => {
        const rect = container.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;

        if (top <= centerY && bottom >= centerY) {
            container.classList.remove('faded');
        } else {
            container.classList.add('faded');
        }
    });
});

window.dispatchEvent(new Event('scroll'));