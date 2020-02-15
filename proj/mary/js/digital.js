'use strict';
document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console!');

    let HeaderMovingBtn = document.getElementById('header__button'),
        SectionSheet = document.getElementById('sheet__body'),
        ListOffBtn = document.getElementById('sheet-list-off'),
        ListOnBtn = document.getElementById('sheet-list-on'),
        Wrapper = document.getElementById('wrapper'),
        SkrollrJs = document.getElementById("skrollr-js");

    let targetPos;

    // way to detect a 'touch screen' device
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


    //
    if (is_touch_device() === true) {
        console.log('true');

        // Remove the child element from the document
        SkrollrJs.remove();


        Wrapper.classList.remove('wrapper');
        Wrapper.classList.add('wrapper-touch-true');

    } else {
        console.log('false');
    }

    function scrollToSection(target, button) { //func describes the way it moves down to necessary section(target)
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
