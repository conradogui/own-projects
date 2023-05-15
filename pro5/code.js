const bot = document.querySelector('.btn')
const div = document.querySelector('.container')

const colors = ['green', 'pink', 'red', 'orange', 'purple', 'aquamarine']

div.style.background = 'grey'
bot.addEventListener('click', botaCor)
function botaCor() {
    const cor = parseInt(Math.random()*colors.length)
    div.style.background = colors[cor]
}