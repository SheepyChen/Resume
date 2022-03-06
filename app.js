const stars = document.querySelectorAll('.star');

const setStarInitXPosition = (star) => {
    const START_WIDTH = 24;
    const windowWidth = window.innerWidth;
    const starLeftPosition = (Math.random() * windowWidth) - START_WIDTH;
    star.style.left = `${starLeftPosition}px`;
};

const setStarMoveSpeed = (star) => {
    const starMoveSpeed = -1 - Math.random();
    star.dataset.speed = starMoveSpeed;
};

stars.forEach(setStarInitXPosition);
stars.forEach(setStarMoveSpeed);

window.addEventListener('scroll', () => {
    let scrollPositionY = window.pageYOffset;
    const moon = document.querySelector('.moon');
    const stars = document.querySelectorAll('.star');
    const parallaxScrollingElements = [...stars, moon];
    console.log(scrollPositionY);
    parallaxScrollingElements.forEach((element) => {
        const elementMoveSpeed = Number(element.dataset.speed);
        element.style.transform = `
      translateY(${scrollPositionY * elementMoveSpeed}px)
    `;
    });
    if (scrollPositionY > 535) {
        moon.classList.add("disappear");
    } else {
        moon.classList.remove("disappear");
    };
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //nav toggle
        nav.classList.toggle('nav-active');
        //links animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                console.log(index);
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //toggle animation
        burger.classList.toggle('toggle');
    });

}
navSlide();





