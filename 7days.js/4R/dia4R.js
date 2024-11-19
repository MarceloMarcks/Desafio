let tentativa = null;
const min = 0;
const max = 20;

// Gera um número aleatório entre min e max (inclusive)
const valor = Math.floor(Math.random() * (max - min + 1) + min);

for (let numTentativa = 1; numTentativa <= 3 && tentativa != valor; numTentativa++) {
    tentativa = Number(prompt(Jogo da Adivinhação!! Digite um número de ${min} a ${max}. Tentativa ${numTentativa} de 3.));
    
    if (tentativa === valor) {
        alert('Parabéns, você acertou!!!');
        break; // Interrompe o loop ao acertar
    } else if (numTentativa === 3) {
        alert(Game Over! O número correto era ${valor}.);
    } else {
        alert('Errado! Tente novamente.');
    }
}