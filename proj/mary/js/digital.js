'use strict';

// cheking whether touch screen on devise
// however, i should say thanks for capability of using free touch screen detector was made by https://twitter.com/modernizr !   


let Wrapper = document.getElementById('wrapper');


function is_touch_device() {

    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    
    var mq = function (query) {
        return window.matchMedia(query).matches;
    }

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }

    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

if (is_touch_device() === false) {
    console.log('FALSE! device does not have `touch screen`');
    Wrapper.classList.add('wrapper');
    Wrapper.setAttribute('data-0', 'transform: translateX(0%)');
    Wrapper.setAttribute('data-2000', 'transform: translateX(-100%)');
    

    
} else {
    document.querySelector('body').style.overflow = 'visible !important';
    document.querySelector('html').style.overflow = 'visible !important';
    Wrapper.classList.add('wrapper-new');

    console.log('TRUE! device has `touch screen`');    
    

}

// when DOM`s finally loaded:

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console!');

    let HeaderMovingBtn = document.getElementById('header__button'),
        SectionSheet = document.getElementById('sheet__body'),
        ListOffBtn = document.getElementById('sheet-list-off'),
        ListOnBtn = document.getElementById('sheet-list-on');

    let targetPos;

    function scrollToSection(target) { //func describes the way it moves down to necessary section(target)
        targetPos = target.getBoundingClientRect().right;
        console.log('tragetPos:',  targetPos);
        window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
        });

    };

    HeaderMovingBtn.addEventListener('click', () =>{
        scrollToSection(SectionSheet, HeaderMovingBtn);
    });

    ListOffBtn.addEventListener('click', ()=>{
        ListOffBtn.classList.toggle('active__list');
        ListOnBtn.classList.toggle('active__list');
    });

    ListOnBtn.addEventListener('click', ()=>{
        ListOffBtn.classList.toggle('active__list');
        ListOnBtn.classList.toggle('active__list');
    });
});
