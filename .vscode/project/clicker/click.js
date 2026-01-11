 const body = document.querySelector('body');

body.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY);

    const circleElement = document.createElement('div');
    circleElement.classList.add('circle');
    circleElement.textContent = "HI";

    const colors = ['red', 'blue', 'orange', 'green', 'pink', 'purple'];

    circleElement.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    circleElement.style.top = `${e.clientY}px`;
    circleElement.style.left = `${e.clientX}px`;

    body.append(circleElement);

    // remove after animation
    setTimeout(() => {
        circleElement.remove();
    }, 1500);
});
