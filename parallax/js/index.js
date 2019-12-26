'use strict';

console.log('it works');

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

let scrolled, timer;
let btnToTop = document.getElementById('btn_to_top');


btnToTop.onclick = function(){
    scrolled = window.pageYOffset;
    console.log('scrolled: ', scrolled);
    toTop();
    //moveTo(); //moving up rapidly than toTop( )
}

/*function moveTo() {
    window.scrollTo({
        top: 1,
        behavior: 'smooth'
    })
}*/

function toTop() {
    if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled -10;
        timer = setTimeout(toTop, 1);
    } else {
        clearTimeout(timer);
        window.scrollTo(0,0);
        
    }    
}