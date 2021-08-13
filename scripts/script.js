window.onload = function createPixelArt() {
  function createH1(tag, id, text) {
    const myTag = document.createElement(`${tag}`);
    const myText = document.createTextNode(text);
    myTag.id = id;
    myTag.appendChild(myText);
    document.body.appendChild(myTag);
  }

  createH1('h1', 'title', 'Paleta de Cores');
};
