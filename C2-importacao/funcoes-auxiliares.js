// Exercicio para aprender importação de arquivos. 
// Acha o maior valor dentro de um vetor e retorna esse numero ao main

const vetor = [5, 50, 10, 98, 23];
function gets() {
    maiorNum = 0;

    for (let i = 0; i < vetor.length; i++) {

        if (maiorNum < vetor[i]) {
            maiorNum = vetor[i];
        }


    }
    return maiorNum;

}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print }