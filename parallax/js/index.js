'use strict';

console.log('it works');
let ulMenuWrapper = document.getElementById('ul__menu__wrapper');
let ulMenuShow = document.getElementById('ul__menu');
let ulMenuItems = document.getElementById('ul__menu-items');
let nav = document.getElementById('nav');

let windowWidth = document.documentElement.clientWidth;

nav.onmouseover = function(){
    if (windowWidth <= 768) {
        ulMenuShow.style.boxShadow = '0 0px 0 lightblue';
    }
    else{
        ulMenuShow.style.boxShadow = '0 0px 0 white';
    }
    
    
};  

nav.onmouseout = function(){
    if (windowWidth <= 768) {
        ulMenuShow.style.boxShadow = '0 0px 0 lightblue';
    }
    else{
        ulMenuShow.style.boxShadow = '0 0px 0 lightblue';
    }
   
};

ulMenuShow.onclick = function(){
    
    if (ulMenuItems.style.display == 'flex') {        
        if (windowWidth <= 1024) {
            ulMenuItems.style.display = 'none';
            ulMenuWrapper.style.background = 'transparent';
            ulMenuShow.style.color = 'white';
            ulMenuShow.innerHTML = 'Menu';
            nav.style.position = 'static';
            nav.style.top = '';
            nav.style.bottom = '';
            nav.style.left = '';
            nav.style.right = '';
        }
        else{
            ulMenuItems.style.display = 'none';
        }

    }
    else{
        
        if (windowWidth <= 1024 ) {
            nav.style.position = 'fixed';
            nav.style.top = 0;
            nav.style.bottom = 0;
            nav.style.left = 0;
            nav.style.right = 0;
            ulMenuWrapper.style.background = 'white';
            ulMenuShow.style.color = 'black';
            ulMenuShow.innerHTML = 'Close';
            ulMenuItems.style.display = 'flex';
        }
        else{
            ulMenuItems.style.display = 'flex';
        }
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