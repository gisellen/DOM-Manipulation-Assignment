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