'use strict';
document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console!');

    let HeaderMovingBtn = document.getElementById('header__button'),
        SectionSheet = document.getElementById('sheet__body');

    let targetPos,
        buttonPos;

    /*window.addEventListener('scroll' , () =>{
        let scrolled = window.scrollY;
        console.log(scrolled);
    });*/

    function scrollToSection(target, button) { //func describes the way it moves down to necessary section(target)
        targetPos = target.getBoundingClientRect().right;
        buttonPos = button.getBoundingClientRect();

        console.log('buttonPos:',  buttonPos);
        console.log('tragetPos:',  targetPos);

            window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
            });

            button.scrollLeft = targetPos;
    };

    HeaderMovingBtn.addEventListener('click', () =>{
        scrollToSection(SectionSheet, HeaderMovingBtn);
    });

    
});
