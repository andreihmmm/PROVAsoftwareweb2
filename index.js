// 1)
function verificarPrimo(numero) {
    if (numero <= 1) {
        console.log('Insira um numero maior que 1')
        return
    }
    var éPrimo = true
    for (i = 2; i < numero; i++) {
        if (Number.isInteger(numero / i)) {
            éPrimo = false
        }
    }
    console.log('é primo: ' + éPrimo)

    todosOsPrimos = []


    for (j = 2; j < 1000; j++) {

        éPrimo = true

        for (k = 2; k < j; k++) {
            if (Number.isInteger(j / k)) {
                éPrimo = false
            }
        }
        if (éPrimo === true) {
            todosOsPrimos.push(j)
        }
    }

    console.log(todosOsPrimos)
}

// 2)
function verificarSenha(senha) {
    var tamanho = senha.length

    var validade = true

    if (tamanho < 8) {
        validade = false
    }

    var senhaMinuscula = senha.replace(/[^a-z]/g, '')
    if (senhaMinuscula.length === 0) {
        validade = false
    }

    var senhaMaiuscula = senha.replace(/[^A-Z]/g, '')
    if (senhaMaiuscula.length === 0) {
        validade = false
    }
    var senhaNumeros = senha.replace(/[^0-9]/g, '')
    if (senhaNumeros.length === 0) {
        validade = false
    }
    if (validade === true) {
        console.log('Parabéns! Sua senha atende a todos os requisitos!')
    } else {
        console.log('Que pena! Sua senha não atende a todos os requisitos!')
    }
}

// 3) 
function calcularFatorial(numero) {
    if (numero < 0) {
        console.log('Digite um número maior que 0.')
    }

    var resultado = 1

    for (i = 1; i < numero; i++) {
        resultado = resultado * i + resultado
    }
    console.log('O fatorial de ' + numero + ' é ' + resultado)

    var fatoriais = []

    for (j = 1; j < 11; j++) {
        resultado = 1

        for (k = 1; k < j; k++) {
            resultado = resultado * k + resultado
        }

        fatoriais.push(j + ':' + resultado)
    }
    console.log(fatoriais)
}

// 4)

function verificarQuadradoPerfeito(numero) {
    if (numero <= 0) {
        console.log('Digite um número inteiro maior que 0')
    }
    var éQuadradoPerfeito = false
    if (Number.isInteger(numero ** (1 / 2))) {
        console.log('O número em questão é um quadrado perfeito!')

    } else {
        console.log('O número em questão não é um quadrado perfeito')
    }
}