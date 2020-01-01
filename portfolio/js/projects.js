'use strict';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded = true');

    let btnProj = document.getElementById('btn_show_projects'),
        projList = document.getElementById('project_list');

    btnProj.addEventListener('click', () => {
        if (projList.style.display == 'block') {
            projList.style.display = 'none';
            btnProj.innerHTML = '► projects'
        } else {
            projList.style.display = 'block';
            btnProj.innerHTML = '▼ projects';
        }
    })
});