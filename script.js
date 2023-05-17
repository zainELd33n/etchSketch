const defaultSize = 16;

let currentSize = defaultSize;

const container = document.getElementById("container");
const reset = document.getElementById("reset");
const sizeSlider = document.getElementById("sizeSlider");
const sizeValue = document.getElementById("sizeValue");





sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

function changeSize(value) {
  updateSize(value)
  updateSizeValue(value)
  reloadGrid()
}

function updateSize(value) {
  currentSize = value;
};

function reloadGrid() {
  clearGrid()
  makeGrid(currentSize)
}

function clearGrid() {
  container.innerHTML = ''
}


function makeGrid(currentSize) {
  container.style.setProperty('grid-template-rows', `repeat(${currentSize}, 1fr)`);
  container.style.setProperty('grid-template-columns', `repeat(${currentSize}, 1fr)`);
  for (c = 0; c < (currentSize * currentSize); c++) {
    let cell = document.createElement("div");
    let grid = container.appendChild(cell);
    grid.className = `grid-item`;
    grid.setAttribute('id', `${c}`);
  };
};


container.addEventListener('mouseover', (e) => {
  let target = e.target;
  let clicked = target.id;
  if(target != container) {
  document.getElementById(`${clicked}`).style.backgroundColor="#574c4c";
  };
});

reset.addEventListener('click', (e) => {
  location.reload();
})

window.onload = () => {
  makeGrid(currentSize)
}
