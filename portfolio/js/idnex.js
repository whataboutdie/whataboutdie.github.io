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
        timer;

    
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
        if (showProjects.style.display == 'block') {
            showProjects.classList.add('close');
            showProjects.classList.remove('open');
            console.log('closed');
            setTimeout(closeitfuckyou, 500);
            menuProjects.innerHTML = 'projects'
            menuProjects.style.background = 'white';
            menuProjects.style.color = 'black';
                  
        } else {
            showProjects.style.display = 'block';
            showProjects.classList.add('open');
            showProjects.classList.remove('close');
            console.log('opened');
            menuProjects.innerHTML = 'close';
            menuProjects.style.background = 'black';
            menuProjects.style.color = 'white';
        }
        
    });

    function closeitfuckyou(params) {
        showProjects.style.display = 'none';
    }

});