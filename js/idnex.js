'use strict';

document.addEventListener('DOMContentLoaded', () => {
    console.log('welcome to my console!');
    
    let chosenMenu = document.getElementById('show_chosen_item'),
        menuAbout = document.getElementById('menu_about'),
        menuProjects = document.getElementById('menu_projects'),
        showProjects = document.getElementById('show_projects'),
        showAbout = document.getElementById('show_about'),
        wrapper = document.getElementById('wrapper'),
        pleaseholder = document.getElementById('viewport-small'),
        viewportWidth = document.documentElement.clientWidth,
        timer,
        zIndexProject,
        zIndexAbout,
        project1 = document.getElementById('project1'),
        grammarProj = document.getElementById('grammarProject'),
        grammarBtn = document.getElementById('grammar'),
        modalAdvice = document.getElementById('advice');
    
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
            console.log('closed');
            setTimeout(closeitfuckyou, 250);
                  
        } else {
            showProjects.style.display = 'grid';
            console.log('zIndexProject: ', zIndexProject);
            showProjects.classList.add('open');
            showProjects.classList.remove('close');
            console.log('opened');
            menuProjects.innerHTML = 'close';
            setTimeout(closeitfuckyou2, 50);
        }
        
    });
    
    menuAbout.addEventListener('click' , () =>{
        if (showAbout.style.display == 'grid') {
            showAbout.classList.add('close');
            showAbout.classList.remove('open');
            menuAbout.innerHTML = 'about';
            console.log('closed');
            setTimeout(closeitfuckyou2, 250);
            
            
                  
        } else {
            setTimeout(closeitfuckyou, 50);
            showAbout.style.display = 'grid';
            showAbout.classList.add('open');
            showAbout.classList.remove('close');
            console.log('opened');
            menuAbout.innerHTML = 'close';
        }
        
    });

    function closeitfuckyou(params) {
        showProjects.style.display = 'none';
    }

    function closeitfuckyou2(params) {
        showAbout.style.display = 'none';
    }


    /***********/

    grammarBtn.addEventListener('click', () => {
        if (modalAdvice.style.display == 'none') {
            modalAdvice.style.display = 'flex';
            grammarProj.style.display = 'none';
            grammarBtn.classList.remove('active');
        } else {
            modalAdvice.style.display = 'none';
            grammarProj.style.display = 'flex';
            grammarBtn.classList.add('active');
        }
    });

});