
const fragment = document.createDocumentFragment();

let divOne = document.createElement('div');
divOne.textContent = 'hello new div one';

let divTow = document.createElement('div');
divTow.textContent = 'hello new div tow';

fragment.appendChild(divOne);
fragment.appendChild(divTow);

document.body.appendChild(fragment);

// js event bubbling start
let section = document.getElementById('section');
section.addEventListener('click', function() {
    alert('section clicked!');
});

let parent = document.getElementById('parent');
parent.addEventListener('click', function() {
    alert('Parent clicked!');
});

let child = document.getElementById('child');
child.addEventListener('click', function(event) {
    alert('Child clicked!');
    // event.stopPropagation(); //event bubbling stop method
});
// js event bubbling end

// mouse click event start 

let mouseDownOne = document.getElementById('mouseDown');
let mouseUpTow = document.getElementById('mouseUp');
let mouseClickThree = document.getElementById('mouseClick');
let dblclickFour = document.getElementById('dblclick');
let mouseOverFive = document.getElementById('mouseOver');
let mouseOutSix = document.getElementById('mouseOut');
let mouseEnterSeven = document.getElementById('mouseEnter');
let mouseLeaveEight = document.getElementById('mouseLeave');

mouseDownOne.addEventListener('mousedown', (l)=>{
    mouseDownOne.style.background = 'green';
    console.log(l.type);
});

mouseUpTow.addEventListener('mouseup', (l)=>{
    mouseUpTow.style.background = 'red';
    console.log(l.type);
});

mouseClickThree.addEventListener('click', (l)=>{
    mouseClickThree.style.background = 'violet';
    console.log(l.type);
});

dblclickFour.addEventListener('dblclick', (l)=>{
    dblclickFour.style.background = '#A66E38';
    console.log(l.type);
    
});

mouseOverFive.addEventListener('mouseover', (l)=>{
    mouseOverFive.style.background = '#FF885B';
    console.log(l.type);
    
});

mouseOutSix.addEventListener('mouseout', (l)=>{
    mouseOutSix.style.background = '#664343';
    console.log(l.type);
    
});

mouseEnterSeven.addEventListener('mouseenter', (l)=>{
    mouseEnterSeven.style.background = '#6C48C5';
    console.log(l.type);
    
});

mouseLeaveEight.addEventListener('mouseleave', (l)=>{
    mouseLeaveEight.style.background = '#6A9C89';
    console.log(l.type);
    
});
// mouse click event end

