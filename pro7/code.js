window.onload = () => {
    const div = document.querySelector('.pontos')
    let contador = 0
    const quadrado = document.querySelector('.quadrado')
    var cont = quadrado.getContext("2d")
    document.addEventListener('keydown', apertaTecla )

    setInterval(game, 90)

    const velocidade = 1 //quantas casas ela vai ter que andar
    var velX = 0  //velocidade x = 0
    var velY = 0 //velocidade y = 0
    var iniX = 10 //inicio no x
    var iniY = 15 //inicio no y
    var tamP = 30 //tamanho da peça
    var quantP = 30 //quantidade de peças
    
    var posMx = 15 //posição maça x
    var posMy = 15 //posição maça y

    var rastro = [] //sem elementos no rastro da cobra
    tamanho = 1

    function game() {

        iniX += velX
        iniY += velY 
        if (iniX < 0) {
            iniX = quantP - 1 //a cada vez que ela anda ela diminui uma peça no quadrado
        }
        if(iniX > quantP - 1) {
            iniX = 0
        }
        if (iniY < 0) {
            iniY = quantP - 1 //a cada vez que ela anda ela diminui uma peça atrás
        }
        if(iniY > quantP - 1) {
            iniY = 0
        }

        cont.fillStyle = 'black'
        cont.fillRect(0,0, quadrado.width, quadrado.height)

        cont.fillStyle = "red"
        cont.fillRect(posMx * tamP, posMy * tamP, tamP, tamP)

        cont.fillStyle = "green"
        for(var i = 0; i < rastro.length; i++) {
            cont.fillRect(rastro[i].x * tamP, rastro[i].y * tamP, tamP, tamP )
            if(rastro[i].x == iniX && rastro[i].y == iniY) { //se o rastro se encontra com o inicio (ou seja, se a cobra bate nela mesma...acaba o jogo)
                contador = div.innerHTML
                contador = 0
                contador++
                                
                velX = 0
                velY = 0
                tamanho = 5
            }
        }

        rastro.push( {
            x: iniX,
            y: iniY
        })
        while (rastro.length > tamanho) {
            rastro.shift()
        }

        if(posMx == iniX && posMy == iniY) {
            tamanho++
            div.innerHTML = contador
            contador++            

            posMx = Math.floor(Math.random() * quantP)
            posMy = Math.floor(Math.random() * quantP)
        }

    }

    function apertaTecla(e) {
        switch (e.keyCode) {
            case 37: //tecla da esquerda
            velX = -velocidade 
            velY = 0
            break
            case 38: //tecla para cima
            velX = 0
            velY = -velocidade
            break
            case 39: //tecla da direita
            velX = velocidade
            velY = 0
            break
            case 40: //tecla para baixo
            velX = 0
            velY = velocidade
            break
            default:
                break
        }
    }
}