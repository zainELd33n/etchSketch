const container = document.getElementById("container");

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = `grid-item${c}`;
  };
  for(i = 0; i < (rows * cols); i++){
    grid.style.setProperty('padding: 10px');
    grid.style.setProperty('border: 1px solid #ddd;');
  }
};

makeGrid(16, 16);


