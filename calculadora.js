//---------------------------------------------------------------------------------------

//╔══════════════════════════════════╗
//║                                  ║
//║       CALCULADORA ➕➖➗✖      ║              
//║                                  ║
//╚══════════════════════════════════╝

//╔═════════════════════════════════════════════════════════════════════╗
//║ Para mudar os valores, escreva outros números nas variáveis abaixo: ║
//╚═════════════════════════════════════════════════════════════════════╝
var primeiroNumero = 4687;
var segundoNumero = 97654;

//╔════════════════════════════════════════════════════════════════════════════════╗
//║ Para mudar o operador, escreva outro operador (+, -, *, /) na variável abaixo: ║
//╚════════════════════════════════════════════════════════════════════════════════╝
var operador = "/";

//---------------------------------------------------------------------------------------


var resultado;

//funções de operaçoes
function soma() {
    return primeiroNumero + segundoNumero;
}

function subtracao() {
    return primeiroNumero - segundoNumero;
}

function multiplicacao() {
    return primeiroNumero * segundoNumero;
}

function divisao() {

    if (segundoNumero !== 0) {
        return primeiroNumero / segundoNumero;

    } else {
        return "Pô cara, não cometa esse pecado matemático. NÃO PODE DIVIDIR POR 0!!!";

    }
}

//condições
if (operador === "+") {
    resultado = soma();

} else if (operador === "-") {
    resultado = subtracao();

} else if (operador === "*") {
    resultado = multiplicacao();

} else if (operador === "/") {
    resultado = divisao();

} else {
    resultado = "Escolha um operador dentre (+, -, *, /)";

}

//resultado
console.log("O resultado é: " + resultado)
