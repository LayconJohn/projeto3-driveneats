let pratoSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;

function selecionarPrato (nomePrato) {
    const prato = document.querySelector(`.${nomePrato} .cardSelecionado`)
    const cardClicado = document.querySelector(".pratos .oculto")
    const estaClicado = cardClicado.classList.contains("oculto")
    if (estaClicado === false) {
        cardClicado.classList.add("oculto")
    }
    prato.classList.remove("oculto")
    pratoSelecionado = true;
    console.log(pratoSelecionado)
}

function selecionarBebida(nomeBebida) {
    const bebida = document.querySelector(`.${nomeBebida}  .cardSelecionado`)
    bebida.classList.remove("oculto")
    bebidaSelecionada = true;
    console.log( bebidaSelecionada)
}

function selecionarSobremesa(nomeSobremesa) {
    const sobremesa = document.querySelector(`.${nomeSobremesa} .cardSelecionado`)
    sobremesa.classList.remove('oculto')
    sobremesaSelecionada = true;
    console.log(sobremesaSelecionada)
} 

function habilitarBotao(pratoSelecionado, bebidaSelecionada, sobremesaSelecionada) {
    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        let botao = document.querySelector(".botao")
        botao.classList.add("oculto")
        let botaoEscondido = document.querySelector(".botao-escondido")
        botaoEscondido.classList.remove("oculto")
    } else {
        alert('Selecione um item de cada lista')
    }
}

function fazerPedido() {
    let telaPedido = document.querySelector(".tela-pedido")
    telaPedido.classList.remove("oculto")
    let pedido = document.querySelector(".pedido")
    pedido.classList.remove("oculto")
}

function cancelarPedido () {
    let telaPedido = document.querySelector(".tela-pedido")
    telaPedido.classList.add("oculto")
    let pedido = document.querySelector(".pedido")
    pedido.classList.add("oculto")
}
