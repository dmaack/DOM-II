// Your code goes here

/*** #1 - MOUSEOVER + MOUSELEAVE - ***/

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


/*** #2 - KEYDOWN - ***/


/*** #3 - WHEEL - ***/

const fbScroll = document.querySelector('.logo-heading');
fbScroll.addEventListener('wheel' , e => {
    fbScroll.style.fontSize = '6rem';
    fbScroll.style.color = 'gold';
})

/*** #4 - DRAG/DROP - ***/

const dragged = document.querySelector('.destination h4');
dragged.addEventListener('drag' , e => {
   
} , false);

dragged.addEventListener('dragstart' , e => {
    dragged = e.target;
    e.taget.style.opacity = .5;
},false);


/****  #5 CLICK ********/

const bodyBgColor = document.querySelector('body');
bodyBgColor.addEventListener('click' , e => {
    bodyBgColor.style.backgroundColor = 'gold';
})


/********* #6 RESIZE WINDOW ***********/

window.addEventListener('resize' , e => {
    const changeTitle = document.querySelector('.intro h2');
    changeTitle.textContent = "You're in the Fun Bus!";
    changeTitle.style.color = 'red';
})