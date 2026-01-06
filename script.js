const val = document.querySelectorAll('p[class^="numero"')
let i = 1

function adiciona() {

    val.innerHTML = ++i
    console.log(val)
}

val.forEach((valor) => {
    
valor.addEventListener('click',adiciona)
})