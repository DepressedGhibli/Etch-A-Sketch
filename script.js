const body = document.querySelector('body');

const number = document.createElement('button')
number.textContent = 'Change Grid Size'
body.appendChild(number);

const container = document.createElement('div');
container.classList.add("container")
body.appendChild(container);

function colour(event){
    event.target.style.backgroundColor = 'pink'; 
    }

number.addEventListener('click', () => {
    let size = prompt("Pick a grid size between 1 and 100"); 

    for (let i = 0; i < (Math.pow(size, 2)); i++){
        const div = document.createElement('div');
         div.classList.add("grid")
        container.appendChild(div);

    }

    const grid = document.querySelectorAll('.grid')
    grid.forEach(div => div.addEventListener("mouseover", colour))
})
