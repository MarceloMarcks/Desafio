let frutas = [];
let vegetais = [];
let laticinios = [];
let congelados = [];
let item = "";
let tipoItem = "";
let addMais = "sim";

while (addMais !== "nao") {
    addMais = prompt("Você deseja adicionar itens à sua lista de compras? (sim ou nao)");

    while (addMais !== "sim" && addMais !== "nao") {
        alert("Tente novamente, operação não reconhecida...");
        addMais = prompt("Você deseja adicionar itens à sua lista de compras? (sim ou nao)");
    }

    if (addMais === "nao") {
        break;
    }

    item = prompt("Adicione um item na lista de compras:");
    tipoItem = prompt("Direcione o item adicionado à sua categoria: 'frutas', 'vegetais', 'laticinios' ou 'congelados'");

    if (tipoItem === "frutas") {
        frutas.push(item);
    } else if (tipoItem === "vegetais") {
        vegetais.push(item);
    } else if (tipoItem === "laticinios") {
        laticinios.push(item);
    } else if (tipoItem === "congelados") {
        congelados.push(item);
    } else {
        alert("Categoria não reconhecida, tente novamente.");
    }
}

alert(`Lista de compras:
- Frutas: ${frutas.join(", ")}
- Vegetais: ${vegetais.join(", ")}
- Laticínios: ${laticinios.join(", ")}
- Congelados: ${congelados.join(", ")}`);