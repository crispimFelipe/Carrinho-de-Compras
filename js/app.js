let totalGeral;
limpar();
function adicionar() {

    // recuperar valores,nome do produto,quantidade,valores
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario =produto.split('$')[1];
    let quantidade = document.getElementById('quantidade').value


       //calcularr o perço,subtotal
    let preço = quantidade * valorUnitario;
   

    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML +` <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preço}</span>
  </section>`

    // atualizar o valor total 
    totalGeral = totalGeral + preço;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent =`R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
    

}

function limpar() {
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML='';
document.getElementById('valor-total').textContent ='R$ 0';
}