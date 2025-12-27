let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let total = 0;

function adicionarCarrinho(nome, preco, qtdId) {
    const qtd = parseInt(document.getElementById(qtdId).value);

    const item = carrinho.find(i => i.nome === nome);

    if (item) item.quantidade += qtd;
    else carrinho.push({ nome, preco, quantidade: qtd });

    salvar();
    atualizar();
}

function removerItem(index) {
    carrinho.splice(index, 1);
    salvar();
    atualizar();
}

function salvar() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function atualizar() {
    const lista = document.getElementById("listaCarrinho");
    const totalSpan = document.getElementById("total");

    lista.innerHTML = "";
    total = 0;

    carrinho.forEach((i, idx) => {
        const sub = i.preco * i.quantidade;
        total += sub;

        lista.innerHTML += `
            <li>${i.nome} (${i.quantidade}x) - R$ ${sub.toFixed(2)}
            <button onclick="removerItem(${idx})">X</button></li>
        `;
    });

    totalSpan.textContent = total.toFixed(2);
}

atualizar();
