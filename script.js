'use strict'

let wrap = document.querySelector('.wrapper'),
    edit = document.querySelector('.editorPlace'),
    textBlock = document.querySelector('.text_block');


let font = document.querySelector('.font');
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

let title = document.querySelector('.title');
function setTitle() {
  let getTitle = title.value;
  switch (getTitle) {
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

title.addEventListener('change', () => {
  setTitle();
});

let size = document.querySelector('.size');
function setSize() {
  let getSize = size.value;
  switch (getSize) {
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

size.addEventListener('change', () => {
  setSize();
});

let textalign = document.querySelector('.textalign');
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

let bgfone = document.querySelector('.bgfone');
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

bgfone.addEventListener('change', () => {
  setBgFone();
});


if (localStorage.getItem('text_in_editor') !== null) {
  document.querySelector('#editor').innerHTML = localStorage.getItem('text_in_editor');
}
document.addEventListener('keydown', function (e) {
  localStorage.setItem('text_in_editor', document.getElementById('editor').innerHTML);
});

let btnAdd = document.querySelector('.btn-add'),
    btnDel = document.querySelector('.btn-delete');

function createDocument() {
  let div = document.createElement('div');
  div.classList.add('newText');
  let txt = document.querySelector('#editor').value;
  let txtPlace = document.createTextNode(txt);
  div.append(txtPlace);
  textBlock.append(div);
  div.addEventListener('click', () => {
    div.remove();
  })
}

let reset = document.querySelector('.reset');

btnAdd.addEventListener('click', () => {
  createDocument();
})

reset.addEventListener('click', () => {
  edit.value='';
})

