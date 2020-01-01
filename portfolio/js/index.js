'use strict';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded = true');

    let ulMenuWrapper = document.getElementById('ul__menu__wrapper'),
        ulMenuShow = document.getElementById('ul__menu'),
        ulMenuItems = document.getElementById('ul__menu-items'),
        nav = document.getElementById('nav'),
        menuProjects = document.getElementById('projects'),
        articleProjects = document.getElementById('article__projects'),
        menuAbout = document.getElementById('about'),
        articleAbout = document.getElementById('article__about'),
        menuContact = document.getElementById('contact'),
        articleContact = document.getElementById('article__contact'),
        btnToTop = document.getElementById('btn_to_top'),
        viewportWidth = document.documentElement.clientWidth;
        
    let scrolled,
        currentPos,
        timer;

    window.addEventListener('scroll', () =>{ // shows or hides button to top depends on its position
        scrolled = window.scrollY;
        currentPos = articleAbout.getBoundingClientRect().top;
        if (scrolled >= currentPos) {
            btnToTop.style.display = 'block';
        } else {
            btnToTop.style.display = 'none';
        }
    });

    btnToTop.addEventListener('click' , moveToTop); // btn of moving to top

    ulMenuShow.addEventListener('click' , function () { // open/close menu 
        if (ulMenuItems.style.display == 'flex') { // close menu
            if (viewportWidth <= 1024) { // menu viewports less than 1024 units
                closeMobMenu();               
            }
            else { // menu viewports more that 1024 units
                ulMenuItems.style.display = 'none';
            }
        }
        else { // open menu
            if (viewportWidth <= 1024 ) { // menu viewports less than 1024 units

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
            else { // menu viewports more that 1024 units
                ulMenuItems.style.display = 'flex';
            }
        }
        
    });

    menuProjects.addEventListener('click' , function(){ // move to article 'projects'       
        if (viewportWidth <= 1024) { // moving for viewpost less that 1024 units
            closeMobMenu();
            scrollToSection(articleProjects);

        } else { // moving for viewport more than 1024 units
            scrollToSection(articleProjects);
        }
    });

    menuAbout.addEventListener('click' , function(){ // move to article 'About'
        if (viewportWidth <= 1024) {
            closeMobMenu();
            scrollToSection(articleAbout);
            
        } else {
            scrollToSection(articleAbout);
        }
        
    });

    menuContact.addEventListener('click' , function(){ //move to article 'Contact'
        if (viewportWidth <= 1024) {
            closeMobMenu();
            scrollToSection(articleContact);
            
        } else {
            scrollToSection(articleContact);
        }
        
    });

    function scrollToSection(target) { //func describes the way it moves down to necessary section(target)
        currentPos = target.getBoundingClientRect().top;
        console.log('currentPos:',  currentPos);
            window.scrollTo({
            top: currentPos - 32,
            behavior: 'smooth'
            }); 
    };

    function closeMobMenu() { // closing menu of viewport less than 1024 units
        ulMenuItems.style.display = 'none';
        ulMenuWrapper.style.background = 'transparent';
        ulMenuShow.style.color = 'white';
        ulMenuShow.innerHTML = 'Menu';
        nav.style.position = 'static';
        nav.style.top = '';
        nav.style.bottom = '';
        nav.style.left = '';
        nav.style.right = '';
    };

    function moveToTop() { // func describes the way it moves up to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }); 
    };

});