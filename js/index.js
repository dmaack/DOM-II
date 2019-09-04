// Your code goes here

/*** #1 - MOUSEOVER ***/

const imgScaleUp = document.querySelector('.intro img');
imgScaleUp.addEventListener('mouseover' , e => {
    imgScaleUp.style.transform = 'scale(1.2)';
    imgScaleUp.style.transition = 'transform 0.5s';
})
/***  #2MOUSELEAVE - ***/
const imgScaleDown = document.querySelector('.intro img');
imgScaleDown.addEventListener('mouseleave' , e => {
    imgScaleDown.style.transform = 'scale(1)';
    imgScaleDown.style.transition = 'transform 0.5s';
})


/*** #3 - DOUBLECLICK - ***/
const doubleBig = document.querySelectorAll('.btn');
doubleBig.forEach(item => {
    item.addEventListener('dblclick' , e => {
       item.style.color = 'turquoise';
       item.style.backgroundColor = 'pink';
       item.style.transform = 'scale(1.5)';
       item.style.transition = '.5s';
       
    })
})


/*** #4 - WHEEL - ***/

const fbScroll = document.querySelector('.logo-heading');
fbScroll.addEventListener('wheel' , e => {
    fbScroll.style.fontSize = '6rem';
    fbScroll.style.color = 'gold';
})

/*** #4 - DRAG/DROP - ***/

// const dragged;

// document.querySelector('.destination h4');
// dragged.addEventListener('drag' , e => {
   
// } , false);

// dragged.addEventListener('dragstart' , e => {
//     dragged = e.target;
//     e.target.style.opacity = .5;
// },false);


/****  #5 CLICK ********/
const sectionBgColor = document.querySelectorAll('.text-content h2');
sectionBgColor.forEach( item => {
    item.addEventListener('click' , e => {
        item.style.backgroundColor = 'lightblue';
        item.style.color = 'white';
        item.style.fontSize = '5rem';
        e.stopPropagation();
    })
})

const bodyBgColor = document.querySelector('body');
bodyBgColor.addEventListener('click' , e => {
    bodyBgColor.style.backgroundColor = 'gold';
})


/********* #6 RESIZE WINDOW ***********/

window.addEventListener('resize' , e => {
    const changeTitle = document.querySelector('.intro h2');
    changeTitle.textContent = "You're in the Fun Bus!";
    changeTitle.style.color = 'red';
    changeTitle.style.fontSize = '5rem';
})

/***** #7  KEYDOWN ******/

const bodyChange = document.querySelector('body');
bodyChange.addEventListener('keydown' , e => {
    bodyChange.style.backgroundColor = 'white';
})

/***** #8  CONTEXTMENU ******/

const noContext = document.querySelector('.footer');
noContext.addEventListener('contextmenu' , e => {
        e.preventDefault();
    })


/***** #9  MOUSEDOWN ******/
const changeText = document.querySelector('.content-destination h2');
changeText.addEventListener('mousedown' , e => {
    changeText.textContent = 'Pick Your Destination NOW!'
    changeText.style.fontSize = '4rem';
    changeText.style.color = 'dodgerblue';
})


/***** #10 MOUSEMOVE ******/
// const navBar = document.getElementsByTagName('html');
//     navBar.addEventListener('focus' , e => {
//     navBar.style.color = 'red';
// })

const navBar = document.querySelectorAll('.nav-link');
navBar.forEach(item => {
    item.addEventListener('mousedown' , e => {
        item.style.color = 'orange';
        item.style.fontSize = '3rem';
    })
    item.addEventListener('mouseup' , e => {
        item.style.color = 'black';
        item.style.fontSize = '1.5rem';
    })
})

