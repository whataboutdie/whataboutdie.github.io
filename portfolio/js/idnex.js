'use strict';

document.addEventListener('DOMContentLoaded', () => {
    console.log('welcome to my console!');
    
    let chosenMenu = document.getElementById('show_chosen_menu'),
        menuAbout = document.getElementById('menu_about'),
        menuProjects = document.getElementById('menu_projects'),
        showProjects = document.getElementById('show_projects'),
        wrapper = document.getElementById('wrapper'),
        pleaseholder = document.getElementById('viewport-small'),
        viewportWidth = document.documentElement.clientWidth,
        timer,
        project1 = document.getElementById('project1');

    
    if (viewportWidth <= 1000) {
        wrapper.style.display = 'none';
        pleaseholder.style.display  = 'flex';
    } else {
        wrapper.style.display = 'grid';
    }

    menuAbout.addEventListener('mouseover', () =>{
        chosenMenu.innerHTML = 'about';
        chosenMenu.classList.add('opacity');
    })

    menuAbout.addEventListener('mouseout', () =>{
        chosenMenu.innerHTML = '';
        chosenMenu.classList.remove('opacity');
    })

    menuProjects.addEventListener('mouseover', () =>{
        chosenMenu.innerHTML = 'projects';

        chosenMenu.classList.add('opacity');
    })

    menuProjects.addEventListener('mouseout', () =>{
        chosenMenu.innerHTML = '';
        chosenMenu.classList.remove('opacity');
    })

    /**********/

    menuProjects.addEventListener('click' , () =>{
        if (showProjects.style.display == 'grid') {
            showProjects.classList.add('close');
            showProjects.classList.remove('open');
            menuProjects.innerHTML = 'projects';
            /*menuProjects.style.borderTop = '0px solid black';
            menuProjects.style.borderLeft = '0px solid black';
            menuProjects.style.borderRight = '0px solid black';
            menuProjects.style.background = 'transparent';*/
            console.log('closed');
            setTimeout(closeitfuckyou, 250);
            
                  
        } else {
            showProjects.style.display = 'grid';
            showProjects.classList.add('open');
            showProjects.classList.remove('close');
            console.log('opened');
            menuProjects.innerHTML = 'close';
            /*menuProjects.style.borderTop = '1px solid white';
            menuProjects.style.borderLeft = '1px solid white';
            menuProjects.style.borderRight = '1px solid white';
            menuProjects.style.background = '#F5F5F5';*/
        }
        
    });

    function closeitfuckyou(params) {
        showProjects.style.display = 'none';
    }

    project1.addEventListener('click', () => {
        
    })

});