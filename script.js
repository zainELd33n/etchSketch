const container = document.getElementById("container");
const reset = document.getElementById("reset");

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
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
