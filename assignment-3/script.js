// 1)
const one = document.getElementById('container')
console.log(one)

// 2)
const two = document.querySelector("#container")
console.log(two)

// 3)
const three = document.querySelectorAll(".second")
console.log(three)

// 4)
const four = document.getElementById('container').lastElementChild.querySelector('.third')
console.log(four)

// 5)
const five = document.getElementById('container')
p = document.createElement('p')
p.innerText = "Hello"
five.appendChild(p)
// 6)
const six = document.querySelector(".footer")
six.classList.add('main')

// 7)
six.classList.remove('main')

// 8)
const eight = document.getElementById('container')
li = document.createElement('li')

// 9)
li.innerText = "four"

// 10)
eight.querySelector('ul').appendChild(li)

// 11)
const eleven = document.querySelectorAll('li')
eleven.forEach(num => {
    num.style.background = "green"
})

// 12)
let r = document.querySelector('.footer')
if(r.parentNode){
    r.parentNode.removeChild(r)
}