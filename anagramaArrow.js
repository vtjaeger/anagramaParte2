//calcular fatorial de um número 

const fatorialArrowFunction = numero => {
    if (numero <= 1){
        return 1;
    }
    return numero * fatorialArrowFunction (numero - 1)
}

//calcular repetições de palavra

const contaRepeticoes = palavra => {
    const repeticoes = {}

    for(let analise of palavra){
        repeticoes[analise] = (repeticoes[analise] || 0) + 1
    }
    return repeticoes
}   

//remove repetições da palavra 

const removeRepeticoes = palavra => {
    const valorUnico = []

    for (let valor of palavra){
        if(!valorUnico.includes(valor)){
            valorUnico.push(valor)
        } else {
            console.error("Letra repetida. A letra repetida é:", valor)
        }
    }
}

//calcula quantidade de possibilidades de escrever a palavra (usando funções já declaradas, fatorial e contaRepetições)

const calcularAnagrama = palavra => {
    let totalDePossibilidades = fatorialArrowFunction(palavra.length);

    const repeticoes = contaRepeticoes(palavra);

    for (let valor of Object.values(repeticoes)){
        if (valor > 1){
            totalDePossibilidades = totalDePossibilidades / fatorialArrowFunction(valor)
        }
    } 
    return totalDePossibilidades
}

//função final com console.log + texto

const anagramaFinal = palavra => {
    if(typeof palavra !== "string" && (!palavra instanceof String)){
        console.error("Palavra inválida!");
        return 
    } 
    
    console.log(`Quantidade de letras ${palavra.length}`);
    console.log(`Possibilidades de escrever ${palavra} diferente é ${calcularAnagrama(palavra)}`)
}


anagramaFinal(palavra)
