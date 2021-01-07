const container = document.querySelector('#container')
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const p = document.createElement('p')


button1.addEventListener("click", a => {
        p.innerText = "I'm Right!"
        document.body.insertBefore(p, container)
})

button2.addEventListener("click", a => {
        p.innerText = "No I'm Right!"
        document.body.insertBefore(p, container)
})