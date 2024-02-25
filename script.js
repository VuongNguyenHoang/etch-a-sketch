let html = document.querySelector('html')
html.style.height='100%';
let body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.height='100%';
body.style.margin=0;


let button = document.createElement('button');
body.appendChild(button);
button.style.width="100px";
button.style.height="20px";
button.style.margin="5px";
button.textContent= 'Start Again';
button.style.alignSelf = 'center';

let box = document.createElement('box')
body.appendChild(box);
box.style.height='1000px';
box.style.width='1000px';
box.style.display = 'flex';
box.style.flexDirection = 'column';
box.style.alignSelf='center';
box.style.border= '5px solid red'



button.addEventListener('click' , () => {
    let dimension= prompt("Squares?");
    while ( dimension > 100 || dimension < 1 || typeof(+dimension) !== "number"){
        dimension= prompt("Squares?")
    }
         
    
    loop: while (box.firstChild) {
        
        box.removeChild(box.lastChild);
    }
    rowCreator(dimension);
    squareCreator(dimension);
});

function rowCreator(dimension){
    for (let i =0; i < dimension; i++){
        let container= document.createElement('div');
        container.className= 'container';
        container.style.display='flex';
        container.style.flex= 'auto';
        container.style.height=`${100/dimension}%`;
        
        box.appendChild(container);
        
    }
}

function squareCreator(dimension){
    let rows= document.querySelectorAll('div.container');
    rows.forEach(container => {
    for (let i =0; i < dimension; i++){
        squares = document.createElement('div');
        squares.className = 'squares';
        squares.style.flex= 'auto';
        squares.style.border= '1px solid grey'
        squares.style.height= '100%';
        
        squares.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor  = 'black';
        }
        
        );
        container.appendChild(squares);
    }

});
}


