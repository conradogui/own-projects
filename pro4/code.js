const mensagem = document.querySelector('.mensagem')
const enviar = document.querySelector('.enviar')
const mensagemErro = document.querySelector('.erro')
const mensagemEnviada = document.querySelector('.mensagem-enviada')

enviar.addEventListener('click', mensagemAparece)

function mensagemAparece() {
    if(mensagem.value) {
        mensagemEnviada.textContent = mensagem.value
        mensagem.value = ''
    } else {
        mensagemErro.style.display = 'block'
        setInterval(() => {
            mensagemErro.style.display = 'none'
        }, 10000)
    }
}
