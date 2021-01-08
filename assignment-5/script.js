//script makes use of jquery & DOM API


//add cell
$("#add").click(() => {
  const container = document.createElement("div");
  container.innerText = "O";
  $(".container").append(container);
  container.setAttribute("class", "cell");
  const cell = document.querySelector(".container").lastElementChild
  cell.addEventListener("click", onClickCell(cell))

});

//delete cell
$("#delete").click(() => {
    const lastchild = document.querySelector(".container").lastElementChild
    lastchild.remove();
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
function onClickCell(block){
  block.addEventListener("click", block => {
    const element = block.srcElement
    let color = document.getElementById("colorSelect").value
    element.style.backgroundColor = color
  })
}