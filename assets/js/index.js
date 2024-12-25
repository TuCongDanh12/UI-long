const section1 = document.querySelector('.section1');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');


rightArrow.addEventListener('click', () => {
    section1.scrollLeft += section1.offsetWidth; 
});


leftArrow.addEventListener('click', () => {
    section1.scrollLeft -= section1.offsetWidth; 
});
