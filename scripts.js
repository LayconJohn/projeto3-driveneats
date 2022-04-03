function selecionarPrato (nomePrato) {
    const prato = document.querySelector(`.${nomePrato} > .cardSelecionado`)
    const cardClicado = document.querySelector(".oculto")
    const estaClicado = cardClicado.classList.contains("oculto")
    if (estaClicado === false) {
        cardClicado.classList.add("oculto")
    }

    prato.classList.remove("oculto")
}

function selecionarBebida(nomeBebida) {
    const card = document.querySelector(`.${nomeBebida} > .cardSelecionado`)
    card.classList.remove("oculto")
}