let pratoSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;
let legendaPrato;
let precoPrato;
let legendaBebida;
let precoBebida;
let legendaSobremesa;
let precoSobremesa;


function selecionarPrato (nomePrato) {
    const prato = document.querySelector(`.${nomePrato} .cardSelecionado`)
    const card = document.querySelector(".pratos .cardSelecionado.selecionado")
    if (card !== null) {
        card.classList.add("oculto")
        card.classList.remove('selecionado')
    }
    prato.classList.remove("oculto")
    prato.classList.add("selecionado")
    pratoSelecionado = true;
    legendaPrato = document.querySelector(`.${nomePrato} .legenda`).textContent
    precoPrato = document.querySelector(`.${nomePrato} .preco`).textContent
    console.log(legendaPrato)
    console.log(precoPrato)
}

function selecionarBebida(nomeBebida) {
    const bebida = document.querySelector(`.${nomeBebida}  .cardSelecionado`)
    const card = document.querySelector(".bebidas .cardSelecionado.selecionado")
    if (card !== null) {
        card.classList.add("oculto")
        card.classList.remove("selecionado")
    }
    bebida.classList.remove("oculto")
    bebida.classList.add("selecionado")
    bebidaSelecionada = true;
    legendaBebida = document.querySelector(`.${nomeBebida} .legenda`).textContent
    precoBebida = document.querySelector(`.${nomeBebida} .preco`).textContent
    console.log(legendaBebida);
    console.log(precoBebida);
}

function selecionarSobremesa(nomeSobremesa) {
    const sobremesa = document.querySelector(`.${nomeSobremesa} .cardSelecionado`)
    const card = document.querySelector(".sobremesas .cardSelecionado.selecionado")
    if (card !== null) {
        card.classList.add("oculto")
        card.classList.remove("selecionado")
    }
    sobremesa.classList.remove('oculto')
    sobremesa.classList.add("selecionado")
    sobremesaSelecionada = true;
    legendaSobremesa = document.querySelector(`.${nomeSobremesa} .legenda`).textContent
    precoSobremesa = document.querySelector(`.${nomeSobremesa} .preco`).textContent
    console.log(legendaSobremesa)
    console.log(precoSobremesa  )
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
    let pedidoComida = document.querySelector(".pedido-comida")
    pedidoComida.textContent = legendaPrato
    let precoPedidoComida = document.querySelector(".preco-comida")
    precoPedidoComida.textContent = precoPrato
    let pedidoBebida = document.querySelector(".pedido-bebida")
    pedidoBebida.textContent = legendaBebida
    let precoPedidoBebida = document.querySelector(".preco-bebida")
    precoPedidoBebida.textContent = precoBebida
    let pedidoSobremesa = document.querySelector(".pedido-sobremesa")
    pedidoSobremesa.textContent = legendaSobremesa
    let precoPedidoSobremesa = document.querySelector(".preco-sobremesa")
    precoPedidoSobremesa.textContent  = precoSobremesa
}

function cancelarPedido () {
    let telaPedido = document.querySelector(".tela-pedido")
    telaPedido.classList.add("oculto")
    let pedido = document.querySelector(".pedido")
    pedido.classList.add("oculto")
}
