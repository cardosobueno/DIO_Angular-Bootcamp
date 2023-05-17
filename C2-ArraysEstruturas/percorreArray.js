
//Crie um programa que percorra um vetor, mostre os numeros e some o valor de tudo

let array = [];

array.push(5);
array.push(6);
array.push(7);


function percorreVetor(vetor)
{
    for(let i = 0; i < vetor.length; i++ )
    {
        console.log(vetor[i]);
    }

}
function somaVetor(vetor)
{
    let soma = 0;
    for(let i = 0; i < vetor.length; i++ )
    {
        soma += vetor[i];
       
    }
    console.log("Soma dos numeros no vetor: " + soma);
}


percorreVetor(array);
somaVetor(array);