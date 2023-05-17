/*O objetivo deste programa é ajudar a equipe do Restaurante Veggieworld a 
identificar rapidamente os pedidos veganos e não veganos e informar as calorias 
de cada prato definido pelo cliente. O programa deve solicitar ao usuário o 
número de pedidos que serão feitos e, em seguida, pedir informações sobre cada pedido, 
incluindo se o prato é vegano ou não (usando as opções "s" para sim e "n" para não) 
e a quantidade de calorias. Ao final, o programa deve exibir uma lista de todos os 
pedidos com suas informações correspondentes.

*/



const numPedidos = 2;

const vectPrato = [null,"Hamburguer de lentilha", "Salada de fruta"];
const vectKcal = [null,300, 60];
const vectSorN = [null,"s","n"];

for (let i = 1; i <= numPedidos; i++) {
  const prato = vectPrato[i];
  const calorias = vectKcal[i];
  //Explicação: atribui "true" se o valor lido via gets() for estritamente igual a 's'.
  //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
  const ehVegano = vectSorN[i].toLowerCase() === 's';
  let stringVegano = "Vegano";

  //TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.
    if(ehVegano)
    {
        stringVegano = "Vegano";
        console.log(`Pedido ${i}: ${vectPrato[i]} (${stringVegano}) - ${calorias} calorias `);
    }else
    {
        stringVegano = "Nao-vegano";
        console.log(`Pedido ${i}: ${vectPrato[i]} (${stringVegano}) - ${calorias} calorias `)
    }

}

