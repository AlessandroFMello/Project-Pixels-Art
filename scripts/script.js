function createElementByTagName(tagName, id) {
  const tag = document.createElement(`${tagName}`);
  tag.id = id;
  return tag;
}

function createTitle() {
  const titleDiv = createElementByTagName('div', 'title-div');
  const title = createElementByTagName('h1', 'title');
  title.innerText = 'Paleta de Cores';
  document.body.appendChild(titleDiv);
  titleDiv.appendChild(title);
}

function createColorPalette() {
  const colorPalette = createElementByTagName('div', 'color-palette');
  document.body.appendChild(colorPalette);
}

function createColor(myColor) {
  const color = createElementByTagName('div', 'color');
  const colorPalette = document.getElementById('color-palette');
  colorPalette.appendChild(color);
  color.id = `${myColor}`;
  color.className = 'color';
}

function addBoard(id) {
  const pixelsDIv = createElementByTagName('div', id);
  document.body.appendChild(pixelsDIv);
}

function addEventListenerAll(element, events, fn) {
  events.split(' ').forEach((ev) => {
    element.addEventListener(ev, fn, false);
  });
}

function addPaintPixelProperty(pixel) {
  addEventListenerAll(pixel, 'click drag', () => {
    const selectedColor = document.querySelector('.selected');
    pixel.className = 'pixel colored';
    pixel.style.backgroundColor = selectedColor.id;
  });
}

function addPixels(size = 5) {
  let count = 1;
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const pixel = createElementByTagName('div', `pixel${count}`);
      const pixels = document.getElementById('pixel-board');
      pixels.style.height = `${size * 42}px`;
      pixels.style.width = `${size * 42}px`;
      addPaintPixelProperty(pixel);
      pixels.appendChild(pixel);
      pixel.className = 'pixel';
      count += 1;
    }
  }
}

function eraseBoard() {
  const pixels = document.getElementById('pixel-board');
  pixels.innerText = '';
}

function addResizeProperty() {
  const input = document.getElementById('board-size');
  const button = document.getElementById('generate-board');

  button.addEventListener('click', () => {
    if (input.value === '') {
      window.alert('Board inválido!');
    } else if (input.value >= 5 && input.value <= 50) {
      eraseBoard();
      addPixels(input.value);
      input.value = '';
    } else {
      input.value = '';
    }
  });
}

function generateBoardBySize() {
  const div = createElementByTagName('div', 'size-div');
  const input = createElementByTagName('input', 'board-size');
  input.type = 'number';
  input.min = 1;
  const button = createElementByTagName('button', 'generate-board');
  document.body.appendChild(div);
  button.innerText = 'VQV';
  div.appendChild(input);
  div.appendChild(button);
  addResizeProperty();
}

function selectColor() {
  const colors = document.querySelectorAll('.color');
  const black = document.getElementById('black');
  colors.forEach((color) => {
    black.className = 'color selected';
    color.addEventListener('click', () => {
      colors.forEach((clickedColor) => {
        clickedColor.className = 'color';
      });
      color.className = 'color selected';
    });
  });
}

function addClearBoardProperty(button) {
  button.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('colored');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}

function addClearBoardButton() {
  const button = createElementByTagName('button', 'clear-board');
  const btnBoard = createElementByTagName('div', 'button-board');
  // addClearBoardProperty(button);
  addClearBoardProperty(button);
  button.innerText = 'Limpar';
  document.body.appendChild(btnBoard);
  btnBoard.appendChild(button);
}

function createPixelArt() {
  createTitle();
  createColorPalette();
  createColor('black');
  createColor('red');
  createColor('blue');
  createColor('green');
  generateBoardBySize();
  addClearBoardButton();
  addBoard('pixel-board');
  addPixels();
  selectColor();
}

window.onload = createPixelArt();
