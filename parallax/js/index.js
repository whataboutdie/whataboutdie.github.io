'use strict';

console.log('it works');

/*function parallax(event) {
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform =  `translateX(${event.clientX*speed/1000}px)`;
        //layer.style.transform =  `translate3d(${event.pageY*speed/1000}px)`;
    });
}

document.addEventListener('mousemove' , parallax);*/

let ulMenuShow = document.getElementById('ul__menu');
let ulMenuItems = document.getElementById('ul__menu-items');
let nav = document.getElementsByTagName('nav');

nav.onmouseover = function(){
    ulMenuShow.style.boxShadow = '0 5px 0 white';
    
};  

nav.onmouseout = function(){
    ulMenuShow.style.boxShadow = '0 5px 0 lightblue';
};

ulMenuShow.onclick = function(){
    
    if (ulMenuItems.style.display == 'flex') {
        ulMenuItems.style.display = 'none';

    }
    else{
        ulMenuItems.style.display = 'flex';
    }
};

