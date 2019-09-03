// Your code goes here

/*** #1 - MOUSEOVER  + MOUSEENTER ***/

const imgScaleUp = document.querySelector('.intro img');
imgScaleUp.addEventListener('mouseover' , e => {
    imgScaleUp.style.transform = 'scale(1.2)';
    imgScaleUp.style.transition = 'transform 0.5s';
})

const imgScaleDown = document.querySelector('.intro img');
imgScaleDown.addEventListener('mouseleave' , e => {
    imgScaleDown.style.transform = 'scale(1)';
    imgScaleDown.style.transition = 'transform 0.5s';
})