let frutas = [];
let massas = [];
let doces = [];
let frios = [];
let comida = "";
let categoria = "";
let adicionarMais = "sim";

function removerItemDaLista() {
    const remover = prompt(Lista de compras:\n  Frutas: ${frutas}\n  Massas: ${massas}\n  Doces: ${doces}\n  Frios: ${frios}\n\nQual produto você deseja remover?);
    
    if (frutas.indexOf(remover) !== -1) {
        frutas.splice(frutas.indexOf(remover), 1);
        alert(O item ${remover} foi removido com sucesso!);
    } else if (massas.indexOf(remover) !== -1) {
        massas.splice(massas.indexOf(remover), 1);
        alert(O item ${remover} foi removido com sucesso!);
    } else if (doces.indexOf(remover) !== -1) {
        doces.splice(doces.indexOf(remover), 1);
        alert(O item ${remover} foi removido com sucesso!);
    } else if (frios.indexOf(remover) !== -1) {
        frios.splice(frios.indexOf(remover), 1);
        alert(O item ${remover} foi removido com sucesso!);
    } else {
        alert(Não foi possível encontrar o item dentro da lista!);
    }
}

function verificaListasVazias() {
    if (frutas.length === 0 && massas.length === 0 && doces.length === 0 && frios.length === 0) {
        alert("Todas as listas estão vazias!");
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    } else {
        removerItemDaLista();
    }
}

while (adicionarMais !== "não") {
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");

    if (adicionarMais === "remover") {
        verificaListasVazias();
    } else if (adicionarMais === "sim") {
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'massas', 'doces' ou 'frios'?");

        if (categoria === 'frutas') {
            frutas.push(comida);
        } else if (categoria === 'massas') {
            massas.push(comida);
        } else if (categoria === 'doces') {
            doces.push(comida);
        } else if (categoria === 'frios') {
            frios.push(comida);
        } else {
            alert("Essa categoria não foi pré-definida.");
        }
    } else if (adicionarMais !== "não") {
        alert("Operação não reconhecida!");
    }
}

alert("Lista de compras finalizada!");