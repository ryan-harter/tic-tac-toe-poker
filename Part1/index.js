// console.log("script running")

let gameProgress = []


function play(boxID){
  let turn = document.querySelector('#player')
  let selected = document.getElementById(boxID)
  // console.log(selected)


  if(turn.innerText === 'X'){
    turn.innerText = 'O'
    selected.innerText = 'X'
    gameProgress[boxID] = 'X'
  }else{
    turn.innerText = 'X'
    selected.innerText = 'O'
    gameProgress[boxID] = 'O'
  }
  selected.innerText.readOnly = true
  // selected.innerText = turn.innerText
  // turn.innerText === 'X' ? turn.innerText = 'O' : turn.innerText = 'X'
  // gameProgress[boxID] = selected.innerText
  // console.log(gameProgress)

  setTimeout(()=>{
  if(gameProgress[0] !== undefined & gameProgress[0] === gameProgress[1] && gameProgress[0] === gameProgress[2]){
    alert(`${gameProgress[0]} is the winner!`)
    reset()
    alert('Game Reset!')
    return
  }else if(gameProgress[0] !== undefined && gameProgress[0] === gameProgress[3] && gameProgress[0] === gameProgress[6]){
    alert(`${gameProgress[0]} is the winner!`)
    reset()
    alert('Game Reset!')
    return
  }else if(gameProgress[0] !== undefined && gameProgress[0] === gameProgress[4] && gameProgress[0] === gameProgress[8]){
    alert(`${gameProgress[0]} is the winner!`)
    reset()
    alert('Game Reset!')
    return
  }else if(gameProgress[1] !== undefined && gameProgress[1] === gameProgress[4] && gameProgress[1] === gameProgress[7]){
    alert(`${gameProgress[1]} is the winner!`)
    reset()
    alert('Game Reset!')
    return
  }else if(gameProgress[2] !== undefined && gameProgress[2] === gameProgress[5] && gameProgress[2] === gameProgress[8]){
    alert(`${gameProgress[2]} is the winner!`)
    reset()
    alert('Game Reset!')
    return
  }else if(gameProgress[2] !== undefined && gameProgress[2] === gameProgress[4] && gameProgress[2] === gameProgress[6]){
    alert(`${gameProgress[2]} is the winner!`)
    reset()
    alert('Game Reset!')
    return
  }else if(gameProgress[3] !== undefined && gameProgress[3] === gameProgress[4] && gameProgress[3] === gameProgress[5]){
    alert(`${gameProgress[3]} is the winner!`)
    reset()
    alert('Game Reset!')
    return
  }else if(gameProgress[6] !== undefined && gameProgress[6] === gameProgress[7] && gameProgress[6] === gameProgress[8]){
    alert(`${gameProgress[6]} is the winner!`)
    reset()
    alert('Game Reset!')
    return
  }
  function isFull(){
    let fullBoard = true;
    for(let i = 0; i <= 8; i++){
      //console.log(gameProgress)
      if(!gameProgress[i]){  
      fullBoard = false;
      }   
  }
  return fullBoard
}

if (isFull()){
  alert("CAT's Game")
  reset()
  alert('Game Reset!')
}
}, 100)

function reset(){
  gameProgress = []
  turn.innerText = 'X'
  let topLeft = document.getElementById('0')
  let topMiddle = document.getElementById('1')
  let topRight = document.getElementById('2')
  let middleLeft = document.getElementById('3')
  let middleMiddle = document.getElementById('4')
  let middleRight = document.getElementById('5')
  let bottomLeft = document.getElementById('6')
  let bottomMiddle = document.getElementById('7')
  let bottomRight = document.getElementById('8')
  
  topLeft.innerText = ''
  topMiddle.innerText = ''
  topRight.innerText = ''
  middleLeft.innerText = ''
  middleMiddle.innerText = ''
  middleRight.innerText = ''
  bottomLeft.innerText = ''
  bottomMiddle.innerText = ''
  bottomRight.innerText = ''
  
}

document.getElementById('reset').onclick = function(){
  gameProgress = []
  turn.innerText = 'X'
  let topLeft = document.getElementById('0')
  let topMiddle = document.getElementById('1')
  let topRight = document.getElementById('2')
  let middleLeft = document.getElementById('3')
  let middleMiddle = document.getElementById('4')
  let middleRight = document.getElementById('5')
  let bottomLeft = document.getElementById('6')
  let bottomMiddle = document.getElementById('7')
  let bottomRight = document.getElementById('8')
  
  topLeft.innerText = ''
  topMiddle.innerText = ''
  topRight.innerText = ''
  middleLeft.innerText = ''
  middleMiddle.innerText = ''
  middleRight.innerText = ''
  bottomLeft.innerText = ''
  bottomMiddle.innerText = ''
  bottomRight.innerText = ''
  alert('Game Reset!')
}
  

}