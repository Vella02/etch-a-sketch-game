const onLoadDivs =16;

function createSidewayDivs(amountOfDivs){
    //const sideDivs = document.querySelector('#horizontalDivs');

    for(let i = 0; i < amountOfDivs; i++){
        const sideDivs = document.querySelector('#horizontalDivs' + i);
        for(let i = 0; i < amountOfDivs; i++){
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('squareDiv');
            sideDivs.appendChild(squareDiv);
        }
    }
};

function createLoadingPage(amountOfDivs){
    const container = document.querySelector('#container');

    for(let i = 0; i < amountOfDivs; i++){
    const horizontalDiv = document.createElement('div');
    horizontalDiv.classList.add('horizontalDiv');
    container.appendChild(horizontalDiv);
    horizontalDiv.setAttribute('id','horizontalDivs' + i);
    }
    createSidewayDivs(amountOfDivs);
};

createLoadingPage(onLoadDivs);


//using a button to reset and resize the canvas
document.getElementById('reset-button').onclick = function(){
    resizeCanvas();
};


function resizeCanvas(){
    let userGrid = prompt("dimensions of the div?");
    resetCanvas();
    if(userGrid > 100 || userGrid < 0){
        alert('Dimensions are too high. Must be <= 100')
    }else{
    createLoadingPage(userGrid);
    }
};

function resetCanvas(){
    const element = document.getElementById('container');
    while(element.hasChildNodes()){
    element.removeChild(element.firstChild);
    }
}