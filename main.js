let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let displayRGB = document.getElementById('displayRGB');
let message = document.getElementById('message');
let head = document.getElementById('head');
let resetButton = document.querySelector('#resetButton');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  ModeSelecting();
  squareSetup();
  reset();
}
function ModeSelecting() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'EASY' ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}
function squareSetup() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        message.textContent = 'Correct!';
        changeColors(pickedColor);
        head.style.backgroundColor = pickedColor;
        resetButton.textContent = 'PLAY AGAIN!';
      } else {
        this.style.backgroundColor = '#232323';
        message.textContent = 'Try again';
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  displayRGB.textContent = pickedColor;
  message.textContent = '';
  head.style.backgroundColor = '#074874';
  resetButton.textContent = 'NEW COLOR';

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      //color the squares w color[i] & show them
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';
    } else {
      //if there are 3 colors hide other squares
      squares[i].style.display = 'none';
    }
  }
  return squares;
}

resetButton.addEventListener('click', function() {
  reset();
});

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
