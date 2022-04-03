function selecionarPrato (nomePrato) {
    const prato = document.querySelector(`.${nomePrato} .cardSelecionado`)
    const cardClicado = document.querySelector(".oculto")
    const estaClicado = cardClicado.classList.contains("oculto")
    if (estaClicado === false) {
        cardClicado.classList.add("oculto")
    }
    prato.classList.remove("oculto")
}

function selecionarBebida(nomeBebida) {
    const bebida = document.querySelector(`.${nomeBebida}  .cardSelecionado`)
    bebida.classList.remove("oculto")
}

function selecionarSobremesa(nomeSobremesa) {
    const sobremesa = document.querySelector(`.${nomeSobremesa} .cardSelecionado`)
    sobremesa.classList.remove('oculto')
}