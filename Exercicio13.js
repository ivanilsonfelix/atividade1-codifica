//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

function calcularMediaAritmetica() {
    let soma = 0;
    let contador = 0;
    let numero;

    do {
        numero = parseFloat(prompt("Digite um número decimal (0 para sair):"));
        if (numero !== 0) {
            soma += numero;
            contador++;
        }
    } while (numero !== 0);

    if (contador > 0) {
        const media = soma / contador;
        console.log(`A média aritmética é: ${media.toFixed(2)}`);
    } else {
        console.log("Nenhum número foi digitado.");
    }
}   