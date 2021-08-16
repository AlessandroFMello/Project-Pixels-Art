function createElementByTagName(tagName, id) {
  const tag = document.createElement(`${tagName}`);
  tag.id = id;
  document.body.appendChild(tag);
  return tag;
}

function createTitle() {
  const titleDiv = createElementByTagName('div', 'title-div');
  const title = createElementByTagName('h1', 'title');
  title.innerText = 'Paleta de Cores';
  document.body.appendChild(titleDiv);
  titleDiv.appendChild(title);
}

function createColorPallete() {
  const colorPallete = createElementByTagName('div', 'color-pallete');
  document.body.appendChild(colorPallete);
}

function createColor(myColor) {
  const color = createElementByTagName('div', 'color');
  const colorPallete = document.getElementById('color-pallete');
  colorPallete.appendChild(color);
  color.id = `${myColor}`;
  color.className = 'color';
}

function createPixelArt() {
  createTitle();
  createColorPallete();
  createColor('black');
  createColor('red');
  createColor('blue');
  createColor('green');
}

window.onload = createPixelArt();
