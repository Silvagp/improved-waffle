const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
const resumo = document.getElementById("resumo");
const totalSpan = document.getElementById("totalCheckout");

let total = 0;

carrinho.forEach(item => {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    resumo.innerHTML += `
        <li>${item.nome} (${item.quantidade}x) - R$ ${subtotal.toFixed(2)}</li>
    `;
});

totalSpan.textContent = total.toFixed(2);

function finalizar() {
    alert("Pedido registrado com sucesso!");
    localStorage.removeItem("carrinho");
    window.location.href = "index.html";
}
