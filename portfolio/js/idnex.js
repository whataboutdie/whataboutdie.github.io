'use strict';

document.addEventListener('DOMContentLoaded', () => {
    console.log('welcome to my console!');
    
    let chosenMenu = document.getElementById('show_chosen_menu'),
        menuAbout = document.getElementById('menu_about'),
        menuProjects = document.getElementById('menu_projects'),
        wrapper = document.getElementById('wrapper'),
        pleaseholder = document.getElementById('viewport-small'),
        viewportWidth = document.documentElement.clientWidth;

    
    if (viewportWidth <= 1000) {
        wrapper.style.display = 'none';
        pleaseholder.style.display  = 'flex';
    } else {
        wrapper.style.display = 'grid';
    }

    menuAbout.addEventListener('mouseover', () =>{
        chosenMenu.innerHTML = 'about';
    })

    menuAbout.addEventListener('mouseout', () =>{
        chosenMenu.innerHTML = '';
    })

    menuProjects.addEventListener('mouseover', () =>{
        chosenMenu.innerHTML = 'projects';
    })

    menuProjects.addEventListener('mouseout', () =>{
        chosenMenu.innerHTML = '';
    })

});