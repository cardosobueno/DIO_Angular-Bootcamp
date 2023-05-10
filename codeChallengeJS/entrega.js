const valorHamburguer = 15;
const quantidadeHamburguer = 3;
const valorBebida = 6;
const quantidadeBebida = 2;
const valorPago = 60;


const totalPedido = (valorHamburguer * quantidadeHamburguer) + (valorBebida * quantidadeBebida);

const troco = valorPago - totalPedido;

const mensagem = `O preço final do pedido é R$ ${totalPedido.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}`;

console.log(mensagem)
