const eles = document.querySelector('.eles')
const nos = document.querySelector('.nos')
const criaEles = document.createElement('p')
const criaNos = document.createElement('p')

const titulo = document.querySelector('.titulo')
const texto = document.createElement('img')
const venci = document.querySelector('.vencedor')
const venci2 = document.querySelector('.vencedor2')

let e = 12
let n = 0

function pontoEles() {

    criaEles.innerHTML = ++e
    criaEles.classList.add('eles')
    eles.appendChild(criaEles)
    console.log(criaEles)

    if (e >= 12) {

        texto.src = 'imagens/GGDtGL.gif'
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

        texto.innerHTML = 'Vencedor'
        texto.classList.add('venci2')
        titulo.appendChild(texto)
        console.log(texto)

    }
}

    
eles.addEventListener('click', pontoEles)
nos.addEventListener('click', pontoNos)
