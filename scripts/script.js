window.onload = createPixelArt();

function createPixelArt() {
  const body = document.body;
  const h1 = document.createElement('h1');
  h1.id = 'title';
  h1.innerText = 'Paleta de Cores';
  body.appendChild(h1);
}
