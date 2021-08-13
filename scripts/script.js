window.onload = function createPixelArt() {
  function createH1() {
    const h1 = document.createElement('h1');
    const text = document.createTextNode('Paleta de Cores');
    h1.id = 'title';
    h1.appendChild(text);
    document.body.appendChild(h1);
  }

  createH1();
};
