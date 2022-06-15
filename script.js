const DEFAULT_COLOR = '#000000';
const DEFAULT_SIZE = 16;

let color = DEFAULT_COLOR;
let squareSize;

const grid = $('.grid');
let gridValue = $('.grid-value');
let gridSize = $('.grid-size');
const applyBtn = $('.apply');
const resetBtn = $('.reset');
let colorPicker = $('#color-picker');
let divs;

colorPicker.addEventListener('input', changeColor);
gridSize.addEventListener('input', updateSize);
applyBtn.addEventListener('click', applyChanges);
resetBtn.addEventListener('click', resetGrid);

createGrid(DEFAULT_SIZE);

function updateSize(e){
  squareSize = e.target.value;
  gridValue.textContent = `${squareSize}x${squareSize}`;
}

function resetGrid(){
  divs.forEach(div => div.style.backgroundColor = '');
}

function applyChanges(){
  divs.forEach(div => div.remove());
  createGrid(squareSize);
}

function changeColor(e){
  color = e.target.value;
}

function createGrid(size){ 
  for (let i = 0; i < size * size; i++) {
    grid.appendChild(createDiv(grid.clientWidth / size));
  }
  setDivs();
}

function setDivs(){
  divs = $all('.box');
  divs.forEach(div => {
    div.addEventListener('mouseover', changeDiv);
  });
}

function changeDiv(e){
  e.target.style.backgroundColor = `${color}`;
  e.target.classList.add('active');
}

function createDiv(size){
  const div = document.createElement('div');
  div.className = 'box';
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

function $(string){
  return document.querySelector(string);
}

function $all(string){
  return document.querySelectorAll(string);
}