// Contador de placar...

const eles = document.querySelector('.eles')
const nos = document.querySelector('.nos')
const criaEles = document.createElement('p')
const criaNos = document.createElement('p')

const titulo = document.querySelector('.titulo')
const texto = document.createElement('img')
const venci = document.querySelector('.vencedor')
const perdi = document.querySelector('.perdedor')

let e = 0
let n = 0

let somVitoria = new Audio('video/truco2_.mp4')

function pontoEles() {

    criaEles.innerHTML = ++e
    criaEles.classList.add('eles')
    eles.appendChild(criaEles)
    console.log(criaEles)

    if (e >= 12) {

        texto.src = 'imagens/truco2.gif'
        texto.classList.add('venci')
        venci.appendChild(texto)
        console.log(texto)
        somVitoria.play()
    }
}

function pontoNos() {

    criaNos.innerHTML = ++n
    criaNos.classList.add('nos')
    nos.appendChild(criaNos)
    console.log(criaNos)

    if (n >= 12) {

        texto.src = 'imagens/GGDtGL.gif'
        texto.classList.add('perdi')
        perdi.appendChild(texto)
        console.log(texto)
        somVitoria.play()

    }
}

const nomeEles = document.querySelector('.nomeEles')
const nomeNos = document.querySelector('.nomeNos')

function tirarEles() {
    
    criaEles.innerHTML = --e
    
}

function tirarNos() {

    criaNos.innerHTML = --n
}
   
eles.addEventListener('click', pontoEles)
nos.addEventListener('click', pontoNos)
nomeEles.addEventListener('click', tirarEles)
nomeNos.addEventListener('click', tirarNos)

// Botão de truco...

const trucado = document.querySelector('.trucado')
const botao = document.querySelector('.truco')
const valor = document.createElement('p')

const pontosNos = document.createElement('button')
const pontosEles = document.createElement('button')
const elesPontua = document.querySelector('.elesPontua')
const nosPontua = document.querySelector('.nosPontua')

let ponto = 1
let somTruco = new Audio('video/Pediu_truco.mp4')

function trucarEles() {

    valor.innerHTML = ponto * 3
    valor.classList.add('trucado')
    trucado.appendChild(valor)
    console.log(valor)
    somTruco.play()

    pontosEles.innerHTML = 'pontuar'
    pontosEles.classList.add('elesPontua')
    elesPontua.appendChild(pontosEles)
    console.log(pontosEles)

    pontosNos.innerHTML = 'pontuar'
    pontosNos.classList.add('nosPontua')
    nosPontua.appendChild(pontosNos)
    console.log(pontosNos)
} 

function btnPontosEles() {
    e += 2
}

function btnPontosNos() {
    n += 2
}

botao.addEventListener('click', trucarEles)
pontosEles.addEventListener('click', btnPontosEles)
pontosNos.addEventListener('click', btnPontosNos)