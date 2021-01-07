// js code for prompt 4
const submit = document.getElementById('submit')
const h1 = document.querySelector('h1')

submit.addEventListener('click', a => {
    value = document.getElementById('password').value;
    if(value === "12345678"){ //prompt 4.a
        alert('Password Correct!') //prompt 4.b
    }
    h1.innerText = value //prompt 4.c
})