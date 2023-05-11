/*Crie um programa que informe ao usuário se ele pode receber um brinde especial 
de acordo com o valor total do pedido. Se o valor total do pedido for maior ou 
igual a R$ 50.00, o usuário receberá uma sobremesa grátis. 
Caso contrário, o usuário não receberá nenhum brinde. */


const valorPedido = 90;
let msg = "";
if(valorPedido >= 50)
{
    msg = `Parabens, você ganhou uma sobremesa gratis!`
}else{
    msg = `Que pena, você nao ganhou nenhum brinde especial.`
}

console.log(msg);

