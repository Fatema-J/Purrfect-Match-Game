
//Global variables
let gameboard = document.querySelector(".gameboard")
const N = 25
let elements = document.querySelectorAll(".element")
//[brownish, brownish, greenish, pale blue, light purple]
let colors = ['#E8CCBF', '#a9cfa5', '#81968F', '#96BDC6', '#E9D6EC']


//Functions
elements.forEach(element => {
  let randomInt = Math.floor(Math.random() * 5)
  element.style.backgroundColor = colors[randomInt]
});

// for(let i = 0; i<elements.length ; i++){

// }



//event handlers
elements.forEach(element => {
  element.addEventListener('click', () =>{
    console.log(element, "clicked")
  })
});













