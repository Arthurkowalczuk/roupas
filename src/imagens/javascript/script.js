let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalCarrinho = document.getElementById('total');
    listaCarrinho.innerHTML = '';
    carrinho.forEach((item) => {
        listaCarrinho.innerHTML += `<li>${item.nome} - R$${item.preco}</li>`; // Corrigido com crases
    });
    totalCarrinho.innerText = `Total: R$${total}`; // Corrigido com crases
}

function finalizarCompra() {
    let mensagem = "Olá, quero finalizar minha compra:\n";
    carrinho.forEach(item => {
        mensagem += `- ${item.nome} - R$${item.preco}\n`; // Corrigido com crases
    });
    mensagem += `Total: R$${total}`;
    const link = `https://wa.me/+555197667309?text=${encodeURIComponent(mensagem)}`;
    // Corrigido com crases
    window.open(link, '_blank');
}

$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
    });
});
