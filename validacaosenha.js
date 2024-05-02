//╔════════════════════════╗
//║ VALIDAÇÃO DE SENHA🔒   ║
//╚════════════════════════╝

//╔════════════════════════════╗
//║  Digite sua senha abaixo:  ║
//╚════════════════════════════╝
const senha = "Senhasupersecreta1234";


//------------------------------VERIFICAÇÃO SEPARADA DE CADA TÓPICO---------------------------------

//Validação de tamanho
var tamanhoMinimo = 8;

    if (senha.length >= tamanhoMinimo) {
        console.log("Sua senha possui " + senha.length, "caracteres. É um bom tamanho de senha!")
        console.log("--------------------------------------------------------")
    } else {
        console.log("Sua senha possui poucos caracteres, isso pode deixa-lá fraca.")
        console.log("-------------------------------------------------------------")
    }
    
//Validação de números
var contemNumero = /\d/.test(senha);

    if (contemNumero) {
        console.log("Sua senha possui número(s). É uma senha decente!")
        console.log("------------------------------------------------")
    } else {
        console.log("Sua senha não possui números, isso pode deixa-lá fraca.")
        console.log("-------------------------------------------------------")
    }

//Validação de maiúsculas
var contemMaiuscula = /[A-Z]/.test(senha);

    if (contemMaiuscula) {
        console.log("Sua senha possui letra(s). É uma senha decente! ")
        console.log("------------------------------------------------")
    } else {
        console.log("Sua senha não possui letras maiúsculas, isso pode deixa-lá fraca.")
        console.log("-----------------------------------------------------------------")
    }

//------------------------------------------------------------------------------------------------


//---------------------VERIFICAÇÃO FINAL SE SUA SENHA É OU NÃO BOA--------------------------------


function validacaoTamanho() {
    if (senha.length >= tamanhoMinimo) {
        return true;
    } else {
       return false;
    }
}

function validacaoNumero() {
    if (contemNumero) {
        return true;
    } else {
        return false;
    }
}

function validacaoMaiuscula() {
    if (contemMaiuscula) {
        return true;
    } else {
        return false;
    }
}

if (validacaoTamanho() && validacaoNumero() && validacaoMaiuscula() === true) {
    console.log("∘₊✧───────────────────────────✧₊∘")
    console.log("Parabéns, sua senha é bem segura!")
    console.log("∘₊✧───────────────────────────✧₊∘")
} else {
    console.log("*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!")
    console.log("Por favor, redefina sua senha de acordo com o que faltou nela!")
    console.log("*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!")
}
//---------------------------------------------------------------------------------------------------