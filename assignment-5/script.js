//script makes use of jquery & DOM API

//add column
$("#addColumn").click(() => {
  // const container = document.createElement("div");
  // $(".container").append(container);
  // container.setAttribute("class", "cell no-select");
  // const cell = document.querySelector(".container").lastElementChild

  const firstChild = document.querySelector(".container").firstElementChild.childElementCount
  const container = document.querySelector(".container")


  const col = document.createElement("div");
  col.setAttribute("class", "col");
  for (let i = 0; i < firstChild; i++) {
    const cell = document.createElement("div");
    cell.setAttribute("class", "cell no-select");
    cell.addEventListener("click", onClickCell(cell))
    col.append(cell);
  }
  columnCount = container.childElementCount
  container.style.gridTemplateColumns = "repeat("+ (columnCount + 1)+", 1fr)"
  container.append(col);
});

//delete column
$("#deleteColumn").click(() => {
  const container = document.querySelector(".container")
  const lastchild = document.querySelector(".container").lastElementChild
  lastchild.remove();
  columnCount = container.childElementCount
  container.style.gridTemplateColumns = "repeat("+ (columnCount)+", 1fr)"
});

//fill all
$("#fillAll").click(() => {
  const cell = document.querySelectorAll(".cell");
  let color = document.getElementById("colorSelect").value
  cell.forEach(block => {
    block.style.backgroundColor = color
  })
})

//clear all
$("#clearAll").click(() => {
  const cell = document.querySelectorAll(".cell");
  cell.forEach(block => {
    block.style.backgroundColor = "transparent"
  })
})

//event listener for each cell
const cell = document.querySelectorAll(".cell");
cell.forEach(block => onClickCell(block))

//function to add event listener
let down = false;
$(document).mousedown(function () {
  down = true;
}).mouseup(function () {
  down = false;
});

function onClickCell(block) {
  block.addEventListener("click", block => {
    const element = block.srcElement
    let color = document.getElementById("colorSelect").value
    element.style.backgroundColor = color
  })
  block.addEventListener("mousemove", block => {
    if (down) {
      console.log(block)
      const element = block.srcElement
      let color = document.getElementById("colorSelect").value
      element.style.backgroundColor = color
    }
  })
}