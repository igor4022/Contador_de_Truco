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

    }
}

    
eles.addEventListener('click', pontoEles)
nos.addEventListener('click', pontoNos)

const trucado = document.querySelector('.trucado')
const botao = document.querySelector('.truco')
const valor = document.createElement('p')

let ponto = 3

function trucar() {

    valor.innerHTML = ponto
    valor.classList.add('trucado')
    trucado.appendChild(valor)
    console.log(valor)

    if (botao) {
        e += 2
        n += 2
        botao.removeChil(ponto)
    }
}

botao.addEventListener('click', trucar)
