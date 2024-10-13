
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

