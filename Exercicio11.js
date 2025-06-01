//Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.

function calcularSomaTotal() {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        const numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
        soma += numero;
    }
    console.log(`A soma total é: ${soma}`);
}   