
// Crie um programa que dado um numero imprima a sua tabuada. Depois, mostre apenas os numeros pares

function tabuada(numero) {
    console.log(`Tabuada do numero ${numero} (até x10)`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${numero} = ${numero * i}`);

    }
}
function tabuadaPares(numero) {
    console.log(`Numeros pares da tabuada do numero ${numero} (até x10)`);
    for (let i = 1; i <= 10; i++) {
        if((numero * i) % 2 === 0)
        {
            console.log(`${i} x ${numero} = ${numero * i}`);
        }

    }
  
}

tabuada(3);
tabuadaPares(3);