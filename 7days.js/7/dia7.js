function somar(primeiroValor, segundoValor) {
    return primeiroValor + segundoValor;
}

function subtrair(primeiroValor, segundoValor) {
    return primeiroValor - segundoValor;
}

function multiplicar(primeiroValor, segundoValor) {
    return primeiroValor * segundoValor;
}

function dividir(primeiroValor, segundoValor) {
    if (segundoValor === 0) {
        alert("Erro: divisão por zero!");
        return null;
    }
    return primeiroValor / segundoValor;
}

let iniciarCalculadora = prompt("Digite 'ligar' para iniciar a calculadora");
let opcoes = "";

while (iniciarCalculadora === "ligar") {
    opcoes = prompt("Digite: soma, subtracao, multiplicacao, divisao ou desligar");

    if (opcoes === "desligar") {
        alert("Calculadora desligada.");
        break;
    }

    const primeiroValor = parseFloat(prompt("Digite o primeiro valor"));
    const segundoValor = parseFloat(prompt("Digite o segundo valor"));

    if (isNaN(primeiroValor) || isNaN(segundoValor)) {
        alert("Erro: você deve digitar números válidos!");
        continue;
    }

    switch (opcoes) {
        case "soma":
            alert(`Resultado: ${somar(primeiroValor, segundoValor)}`);
            break;

        case "subtracao":
            alert(`Resultado: ${subtrair(primeiroValor, segundoValor)}`);
            break;

        case "multiplicacao":
            alert(`Resultado: ${multiplicar(primeiroValor, segundoValor)}`);
            break;

        case "divisao":
            const resultadoDivisao = dividir(primeiroValor, segundoValor);
            if (resultadoDivisao !== null) {
                alert(`Resultado: ${resultadoDivisao}`);
            }
            break;

        default:
            alert("Opção inválida! Tente novamente.");
    }
}

alert("Programa encerrado.");
