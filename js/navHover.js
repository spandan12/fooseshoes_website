let navigationBar = document.getElementsByClassName('nav-bar')[0]; 
let activeState = 0;
let navigationElements = navigationBar.children;
for(let i = 0; i< navigationElements.length; i++){
    navigationElements[i].onmouseover = function(){
        activeState = i;
        setHoverstate();
    };
}

function setHoverstate(){
    for(let i = 0; i< navigationElements.length; i++){
        if(activeState == i){
            navigationElements[i].children[0].classList.add('nav-active');
            navigationElements[i].children[0].children[0].classList.add('active');
        }
        else{
            navigationElements[i].children[0].classList.remove('nav-active');
            navigationElements[i].children[0].children[0].classList.remove('active');
        }
    }
}