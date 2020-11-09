console.log('Script running')

let colorInput = document.querySelector('#style-assign')
let idInput = document.querySelector('#id-getter')

console.log(colorInput)
console.log(idInput)

function setCard(){
  let card = document.getElementById(idInput.value)
  card.style.color = colorInput.value

}

document.querySelector('#reset').onclick = function(){
  let clubsSuit = document.getElementById('clubs')
  let spadesSuit = document.getElementById('spades')
  let heartsSuit = document.getElementById('hearts')
  let diamondsSuit = document.getElementById('diamonds')

  clubsSuit.style = ''
  heartsSuit.style = ''
  spadesSuit.style = ''
  diamondsSuit.style = ''
}

