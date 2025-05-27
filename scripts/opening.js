const title = document.getElementById('mainTitle');
const leftPointer = document.querySelector('.leftPointer');
const rightPointer = document.querySelector('.rightPointer');

let pointersShown = false;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const triggerPoint = window.innerHeight * 1.5; // 150vh

    const spacing = Math.min(scrollY / 10, 100);
    title.style.letterSpacing = `${spacing}px`;

    const fade = Math.max(1 - scrollY / 700, 0);
    title.style.opacity = fade;

    // Show pointers after 150vh scroll
    if (scrollY >= triggerPoint && !pointersShown) {
        leftPointer.classList.add('show-pointer');
        rightPointer.classList.add('show-pointer');
        pointersShown = true;
    }

    // Hide if user scrolls back up
    if (scrollY < triggerPoint && pointersShown) {
        leftPointer.classList.remove('show-pointer');
        rightPointer.classList.remove('show-pointer');
        pointersShown = false;
    }
});