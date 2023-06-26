function fatorial(num) {
    if (num <= 1) {
        return 1
        
    }
    
    return num * fatorial(num - 1)
}

function contarRepeticoes(palavra) {
    const repeticoes = {}

    for (let valor of palavra) {
        repeticoes[valor] = (repeticoes[valor] || 0) + 1
    }

    return repeticoes
}

function removeRepeticoes(palavra) {
    const valorUnico = []

    for (let valor of palavra) {
        if (!valorUnico.includes(valor)) {
            valorUnico.push(valor)
        }
    }

    return valorUnico.join("")
}

function calcularAnagrama(palavra) {
    let totalDePossibilidades = fatorial(palavra.length)

    const repeticoes = contarRepeticoes(palavra)

    for (let valor of Object.values(repeticoes)) {
        if (valor > 1) {
            totalDePossibilidades /= fatorial(valor)
        }
    }

    return totalDePossibilidades
}

function anagrama(palavra) {
    if (typeof palavra !== "string" && !(palavra instanceof String)) {
        console.error("Não é String")

        return
    }

    console.log("Quantidade de letras:", palavra.length)
    console.log("Possibilidade de escrever", palavra, "diferente é", calcularAnagrama(palavra))

}

anagrama("vinicius")
//ovo
//oov
//voo 