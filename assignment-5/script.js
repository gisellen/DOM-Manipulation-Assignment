//add cell
$("#add").click(function() {
  const container = document.createElement("div");
  container.innerText = "O";
  $(".container").append(container);
  container.setAttribute("class", "cell");
});

//delete cell
$("#delete").click(function() {
    const lastchild = document.querySelector(".container").lastElementChild
    lastchild.remove();
});

//get colors
let red = document.getElementById("colorSelect").value
console.log(red)

//event listener for each cell without jquery
const cell = document.querySelectorAll(".cell");
cell.forEach(block => block.addEventListener("click", block => {
  const element = block.srcElement
  let color = document.getElementById("colorSelect").value
  element.style.backgroundColor = color
}))