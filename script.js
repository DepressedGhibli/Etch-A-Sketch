const body = document.querySelector('body');

const number = document.createElement('button')
number.textContent = 'Change Grid Size'
body.appendChild(number);

const container = document.createElement('div');
container.classList.add("container")
body.appendChild(container);

//colour changing function see ReadMe for explanation
function colour(event){
    event.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16); 
    }

number.addEventListener('click', () => {

    let size = prompt("Pick a grid size between 1 and 100"); 

    for (let i = 0; i < size; i++){
        const column = document.createElement('div');
        column.classList.add("column")
        for (let j = 0; j < size; j++){
            const row = document.createElement('div');
             row.classList.add("row")
            column.appendChild(row);
            row.addEventListener("mouseover", colour)
        }
        container.appendChild(column);      
    }
})
