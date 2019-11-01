hamburger = document.getElementsByClassName('hamburger-button')[0];
headerWrapper = document.querySelector('.header-bottom .wrapper');
headerWrapper.onmouseover = createHamburgerMenu;

headerWrapper.onmouseout = removerHamburgerMenu;
function createHamburgerMenu(){
    let windowSize = window.outerWidth;
    if(windowSize < 600){
        let listName = document.getElementsByClassName('hb-left')[0];
        listName.style.display = 'block';
        listName.style.position = 'absolute';
        listName.style.top = '0px';
        listName.style.left = '12px';
        listName.style.zIndex = 10;
        listName.style.backgroundColor = '#fff';
        listName.style.width = '30%';
    }  
    
    
    // hamburger.style.display = 'none';
}

function removerHamburgerMenu(){
    let windowSize = window.outerWidth;
    if(windowSize < 600){
        hamburger.style.display = 'block';
        let list = document.getElementsByClassName('hb-left')[0];
        list.style.display = 'none';
    }
    
}