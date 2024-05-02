
//Global variables
let gameboard = document.querySelector(".gameboard")
const N = 25
let elements = document.querySelectorAll(".element")
//[brownish, brownish, greenish, pale blue, light purple]
let colors = ['#E8CCBF', '#a9cfa5', '#81968F', '#96BDC6', '#E9D6EC']
let chosenElement = [Infinity, Infinity]

//Functions
elements.forEach(element => {
  let randomInt = Math.floor(Math.random() * 5)
  element.style.backgroundColor = colors[randomInt]
});


const identifyAdjacent = (chosenArray) =>{
  let steps = Math.sqrt(elements.length)
  if(chosenArray[1] == chosenArray[0]-1 || 
    chosenArray[1] == chosenArray[0]+1 ||
    chosenArray[1] == chosenArray[0]-steps ||
    chosenArray[1] == chosenArray[0]+steps){
      console.log("allow move")
      swapElements(chosenArray)
      chosenElement = [Infinity, Infinity]
    } else {
      console.log("prevent move")
      chosenElement = [Infinity, Infinity]
    }
}

const swapElements = (chosenArray) =>{
  if(isMatched(chosenArray)){
    let tempColor = elements[chosenArray[0]].style.backgroundColor

    elements[chosenArray[0]].style.backgroundColor = elements[chosenArray[1]].style.backgroundColor

    elements[chosenArray[1]].style.backgroundColor = tempColor
  }
}

const isMatched = (chosenArray) => {
  let i0 = chosenArray[0]
  let i1 = chosenArray[1]
  let color = elements[i0].style.backgroundColor

  /*match conditions
  1. two right, two left, two up, two down
  2. left and right, up and down
  */
  // if(color === elements[i1+1].style.backgroundColor ||)
}

//event handlers
elements.forEach((element, index) => {
  element.addEventListener('click', () =>{
    if(chosenElement[0] === Infinity){
      chosenElement[0] = index
      console.log(chosenElement[0])
    } else if(chosenElement[1] === Infinity){
      chosenElement[1] = index
      console.log(chosenElement[1])
      identifyAdjacent(chosenElement)
    }
  })
});













