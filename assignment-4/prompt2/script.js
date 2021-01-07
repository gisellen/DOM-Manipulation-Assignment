const box = document.querySelector("#box")
box.addEventListener('mouseover', a =>{
    const content = document.querySelector("#content")
    content.innerText = "You hovered over me!"
    alert("I told you not to hover over me...")
})

//extra code to test mouseout function
// box.addEventListener('mouseout', a =>{
//     const content = document.querySelector("#content")
//     content.innerText = "Don't hover over me"
// })