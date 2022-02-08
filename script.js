'use strict'

let wrap = document.querySelector('.wrapper'),
    edit = document.querySelector('.newText'),
    textBlock = document.querySelector('.text_block'),
    font = document.querySelector('.font'),
    fontSize = document.querySelector('.font-size'),
    colorText = document.querySelector('.color-text'),
    textalign = document.querySelector('.textalign'),
    bgfone = document.querySelector('.bgfone'),
    btnAdd = document.querySelector('.btn-add'),
    btnDel = document.querySelector('.btn-delete'),
    readerBody = document.querySelector('.reader_body');

function setFont() {
    let getFont = font.value;
    switch (getFont) {
    case edit.style.fontFamily = 'Arial':
    break;
    case edit.style.fontFamily = 'Arial Black':
    break;
    case edit.style.fontFamily = 'Courier New':
    break;
    case edit.style.fontFamily = 'Times New Roman':
    break;
    case edit.style.fontFamily = "'Comforter', cursive":
    break;
    case edit.style.fontFamily = "'Open Sans Condensed', sans-serif":
    break;
    case edit.style.fontFamily = "'Balsamiq Sans', cursive":
    break;
    case edit.style.fontFamily = "'Caveat', cursive":
    break;
    case edit.style.fontFamily = "'Cormorant', serif":
    break;
    }  
}

font.addEventListener('change', () => {
  setFont();
});

function setFontSize() {
  let getFontSize = fontSize.value;
  switch (getFontSize) {
    case edit.style.fontSize= '14px':
    break;
    case edit.style.fontSize= '16px':
    break;
    case edit.style.fontSize= '18px':
    break;
    case edit.style.fontSize= '20px':
    break;
    case edit.style.fontSize= '25px':
    break;
    case edit.style.fontSize = '30px':
    break;
    case edit.style.fontSize = '35px':
    break;
    case edit.style.fontSize = '40px':
    break;
    case edit.style.fontSize = '45px':
    break;
  }
}

fontSize.addEventListener('change', () => {
  setFontSize();
});


function setColorText() {
  let getColorText = colorText.value;
  switch (getColorText) {
    case edit.style.color = 'black':
    break;
    case edit.style.color = 'red':
    break;
    case edit.style.color = 'blue':
    break;
    case edit.style.color = 'green':
    break;
  }
}

colorText.addEventListener('change', () => {
  setColorText();
});


function setAlign() {
  let getAlign = textalign.value;
  switch (getAlign) {
    case edit.style.textAlign = 'left':
    break;
    case edit.style.textAlign = 'left':
    break;
    case edit.style.textAlign = 'right':
    break;
    case edit.style.textAlign = 'center':
    break;
  }
}

textalign.addEventListener('change', () => {
  setAlign();
});


function setBgFone() {
  let getBgFone = bgfone.value;
  switch (getBgFone) {
    case edit.style.backgroundColor = '#f0eee4':
    break;
    case edit.style.backgroundColor = '#e2e3e1':
    break;
    case edit.style.backgroundColor = '#fff3db':
    break;
    case edit.style.backgroundColor = '#cbe9f2':
    break;
    case edit.style.backgroundColor = '#e8e4f7':
    break;
    case edit.style.backgroundColor = '#ffe2db':
    break;
    case edit.style.backgroundColor = '#fff9db':
    break;
    case edit.style.backgroundColor = '#eeffdb':
    break;
  }
}



bgfone.addEventListener('click', () => {
  setBgFone();
});

function createDocument() {
  let div = document.createElement('div');
  div.classList.add('newText');
  let txt = document.querySelector('.newText').value;
  let txtPlace = document.createTextNode(txt);
  div.append(txtPlace);
  textBlock.append(div);
  div.addEventListener('click', () => {
    div.remove();
  })
  let getColorFone = bgfone.value,
      txtAlign = textalign.value,
      colorTxt = colorText.value,
      wordSize = fontSize.value,
      fontFam = font.value;
  div.style.fontFamily = fontFam;
  div.style.fontSize = wordSize;
  div.style.color = colorTxt;
  div.style.textAlign = txtAlign;
  div.style.backgroundColor = getColorFone;
}



let reset = document.querySelector('.reset');

btnAdd.addEventListener('click', () => {
  createDocument();
})

reset.addEventListener('click', () => {
  edit.value='';
})

