let numSquares = 6;
let colors = generateRandomColors(numSquares);

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let displayRGB = document.getElementById('displayRGB');
let message = document.getElementById('message');
let head = document.getElementById('head');
let reset = document.querySelector('#reset');
let easyButton = document.querySelector('#easy');
let hardButton = document.querySelector('#hard');

easyButton.addEventListener('click', function() {
  easyButton.classList.add('selected');
  hardButton.classList.remove('selected');
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  displayRGB.textContent = pickedColor;

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

hardButton.addEventListener('click', function() {
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  displayRGB.textContent = pickedColor;

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
  }
});

reset.addEventListener('click', function() {
  // resetGame();
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  displayRGB.textContent = pickedColor;
  message.textContent = '';
  head.style.backgroundColor = '#074874';
  reset.textContent = 'NEW COLOR';

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

displayRGB.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener('click', function() {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      message.textContent = 'Correct!';
      changeColors(pickedColor);
      head.style.backgroundColor = pickedColor;
      reset.textContent = 'PLAY AGAIN!';
    } else {
      this.style.backgroundColor = '#232323';
      message.textContent = 'Try again';
    }
  });
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
function generateRandomColors(numSquares) {
  let arr = [];
  for (let i = 0; i < numSquares; i++) {
    //random color and push into array
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ',' + ' ' + g + ',' + ' ' + b + ')';
}

// function resetGame() {
//   generateRandomColors(6);
//   pickColor();
//   for (let i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     // changeColors(pickedColor);
//   }
//   return squares;
// }
