const numero = document.querySelector('.numero')
const regredir = document.querySelector('.regredir')
const zerar = document.querySelector('.zerar')
const progredir = document.querySelector('.progredir')

let contador = 0

progredir.addEventListener('click', somaUm)
regredir.addEventListener('click', menosUm)
zerar.addEventListener('click', reset)

function somaUm() {
    contador++
    numero.innerHTML = contador
    if(contador > 0) {
        numero.style.color = 'green'
    }
    if(contador === 0) {
        numero.style.color = 'black'
    }
}
function menosUm() {
    contador--
    numero.innerHTML = contador
    if(contador < 0) {
        numero.style.color = 'red'
    }
    if(contador === 0) {
        numero.style.color = 'black'
    }
}
function reset() {
    contador = 0
    numero.innerHTML = contador 
    numero.style.color = 'black'    
}