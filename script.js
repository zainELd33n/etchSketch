const defaultSize = 16;

let currentSize = defaultSize;

const container = document.getElementById("container");
const reset = document.getElementById("reset");

const sizeSlider = document.getElementById("sizeSlider");
const sizeValue = document.getElementById("sizeValue");





sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}








function makeGrid(currentSize, currentSize) {
  container.style.setProperty('--grid-rows', currentSize);
  container.style.setProperty('--grid-cols', currentSize);
  for (c = 0; c < (currentSize * currentSize); c++) {
    let cell = document.createElement("div");
    let grid = container.appendChild(cell);
    grid.className = `grid-item`;
    grid.setAttribute('id', `${c}`);
  };
};

makeGrid(16, 16);

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
