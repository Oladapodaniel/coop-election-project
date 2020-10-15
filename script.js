let hamburger = document.querySelector('#hamburger');
let navList = document.querySelector('#dashboard-left-nav');
hamburger.addEventListener('click', function (e){
    if (navList) {
        navList.style.marginLeft = '0px';
        hamburger.style.display = 'none';
    } 
    // else {
    //     navList.style.marginLeft = '-800px';
    //     hamburger.innerHTML = "<img src=\"./assets/ICON/SVG ICON/close.svg\">"
        
    // }
    
})

let close = document.querySelector('#close');
close.addEventListener('click', function (e) {
    navList.style.marginLeft = '-800px';
    hamburger.style.display = 'block';
})