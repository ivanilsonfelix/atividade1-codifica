//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

function ordenarValores(valor1, valor2) {
    if (valor1 < valor2) {
        console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`);
    } else {
        console.log(`Valores em ordem crescente: ${valor2}, ${valor1}`);
    }
}