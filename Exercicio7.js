//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

function calcularPrecoMacas(quantidade) {
    const precoPorMaca = quantidade < 12 ? 0.30 : 0.25;
    const total = quantidade * precoPorMaca;
    console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
}