//Global variables
let gameboard = document.querySelector('.gameboard')
const N = 25
let elements = document.querySelectorAll('.element')
//[brownish, brownish, greenish, pale blue, light purple]
let colors = ['#E8CCBF', '#a9cfa5', '#81968F', '#96BDC6', '#E9D6EC']
let chosenElement = [Infinity, Infinity]
let steps = Math.sqrt(elements.length)

//Functions


// Randomly color the elements
elements.forEach((element) => {
  let randomInt = Math.floor(Math.random() * 5)
  element.style.backgroundColor = colors[randomInt]
})



const swapElements = (chosenArray) => {
  if(isMatched(chosenArray)){
    
    let tempColor = elements[chosenArray[0]].style.backgroundColor

    elements[chosenArray[0]].style.backgroundColor =
      elements[chosenArray[1]].style.backgroundColor
  
    elements[chosenArray[1]].style.backgroundColor = tempColor

    clearMatches(findAllMatches())

    chosenElement = [Infinity, Infinity]
  }

  chosenElement = [Infinity, Infinity]
}



const isMatched = (chosenArray) => {
  let i0 = chosenArray[0]
  let i1 = chosenArray[1]
  let firstColor = elements[i0].style.backgroundColor
  let secondColor = elements[i1].style.backgroundColor


  /** [ 0 , i1, 0]
   *  [ 0 , i0, 0]
   *  [ 0 , 0 , 0]
   * check right , left, up, between horizontal
  */
  if(i0 == i1+steps){ 
    if(checkAround(i1, firstColor, 1, 2) ||
    checkAround(i1, firstColor, -1, -2) ||
    checkAround(i1, firstColor, -steps, -steps*2) ||
    checkAround(i1, firstColor, -1, 1) ){
      return true
    }
    if(checkAround(i0, secondColor, 1, 2) ||
    checkAround(i0, secondColor, -1, -2) ||
    checkAround(i0, secondColor, steps, steps*2) ||
    checkAround(i0, secondColor, -1, 1) ){
      return true
    }
  }

  /** [ 0 , 0 , 0]
   *  [ i1, i0, 0]
   *  [ 0 , 0 , 0]
   * check left, up, down, between vertical
  */  
  if(i0 == i1+1){
    if( checkAround(i1, firstColor, -1, -2) ||
    checkAround(i1, firstColor, -steps, -steps*2) ||
    checkAround(i1, firstColor, steps, steps*2) || 
    checkAround(i1, firstColor, -steps, steps)){
      return true
    }
    if( checkAround(i0, secondColor, 1, 2) ||
    checkAround(i0, secondColor, -steps, -steps*2) ||
    checkAround(i0, secondColor, steps, steps*2) || 
    checkAround(i0, secondColor, -steps, steps)){
      return true
    }
  }

  /** [ 0 , i0, 0]
   *  [ 0 , i1, 0]
   *  [ 0 , 0 , 0]
   * check right , left, down, between horizontal
  */
  if(i1 == i0+steps){ 
    if(checkAround(i1, firstColor, 1, 2) ||
    checkAround(i1, firstColor, -1, -2) ||
    checkAround(i1, firstColor, steps, steps*2) ||
    checkAround(i1, firstColor, -1, 1) ){
      return true
    }
    if(checkAround(i0, secondColor, 1, 2) ||
    checkAround(i0, secondColor, -1, -2) ||
    checkAround(i0, secondColor, -steps, -steps*2) ||
    checkAround(i0, secondColor, -1, 1) ){
      return true
    }
  }

  /** [ 0 , 0 , 0]
   *  [ i0, i1, 0]
   *  [ 0 , 0 , 0]
   * check right, up, down, between vertical
  */  
  if(i1 == i0+1){
    if( checkAround(i1, firstColor, 1, 2) ||
    checkAround(i1, firstColor, -steps, -steps*2) ||
    checkAround(i1, firstColor, steps, steps*2) || 
    checkAround(i1, firstColor, -steps, steps)){
      return true
    }
    if( checkAround(i0, secondColor, -1, -2) ||
    checkAround(i0, secondColor, -steps, -steps*2) ||
    checkAround(i0, secondColor, steps, steps*2) || 
    checkAround(i0, secondColor, -steps, steps)){
      return true
    }
  }

  console.log('no match: up, down, left or right')
  return false
}

const checkAround = (i1, color, adj1, adj2) =>{
  console.log("direction1:",adj1)
  console.log("direction2:",adj2)
  try {
    if (color === elements[i1 + adj1].style.backgroundColor) {
      console.log("adj1", elements[i1 + adj1].style.backgroundColor)
      console.log('1st adjacent match')
  
      if (color === elements[i1 + adj2].style.backgroundColor) {
        console.log("adj2", elements[i1 + adj2].style.backgroundColor)
        console.log('2nd adjacent match')
        return true
      }
    }
    return false
  } catch (error) {
    console.log("undefined")
    return false
  }
  
}

const findAllMatches =() =>{
  console.log('here find all matched');
  elements = document.querySelectorAll('.element')

  let elementsToBeCleared = []
  let rowTracer = 1
  let colTracer = 1
  for(let i = 0; i<steps; i++){
    let rowColor = elements[i*steps].style.backgroundColor
    let colColor = elements[i*steps].style.backgroundColor

    for(let j = 1; j<steps; j++){
      
      //horizontally
      if(elements[i*steps+j].style.backgroundColor === rowColor){
        rowTracer++

        if(j == steps-1){ //last item in the row
          if (rowTracer >= 3){
            for(let t = 0 ; t < rowTracer; t++){              
              elementsToBeCleared.push(i*steps+j-t)
            }
            console.log("cells to be cleared: ", elementsToBeCleared);
          }
          rowTracer = 1
        }
      } else{
        if (rowTracer >= 3){
          for(let t = 0 ; t < rowTracer; t++){
            elementsToBeCleared.push(i*steps+j-t-1)
          }
          console.log("cells to be cleared: ", elementsToBeCleared);
        }
        rowTracer = 1
        rowColor = elements[i*steps+j].style.backgroundColor
      }

      if(elements[j*steps+i].style.backgroundColor === colColor){
        colTracer++

        if(j== steps-1){
          if(colTracer >= 3){
            for(let t = 0 ; t < colTracer; t++){              
              elementsToBeCleared.push(j*steps+i-(t*steps))
            }
            console.log("cells to be cleared: ", elementsToBeCleared);
          }
          colTracer = 1
        }
      } else{
        if(colTracer >= 3){
          for(let t = 0 ; t < colTracer; t++){              
            elementsToBeCleared.push(j*steps+i-(t*steps))
          }
          console.log("cells to be cleared: ", elementsToBeCleared);
        }
        colTracer = 1
        colColor = elements[j*steps+i].style.backgroundColor
      }

    } // end for loop j
  } // end for loop i
  return elementsToBeCleared
}


const clearMatches = (array) => {
  for(let i = 0; i<array.length; i++){
    elements[array[i]].remove()
  }
}


//event handlers
elements.forEach((element, index) => {
  element.addEventListener('click', () => {
    if (chosenElement[0] === Infinity) {
      chosenElement[0] = index
    } else if (chosenElement[1] === Infinity) {
      chosenElement[1] = index
      swapElements(chosenElement)
    }
  })
})
