<form onsubmit="event.preventDefault(); LerMensagem();">
  <h1>Sistema de Cadastro</h1>

  <label for="nome">Nome:</label>
  <input type="text" id="nome" pattern="[A-Za-z]+" placeholder="Digite seu nome" oninput="this.value = this.value.replace(/[^A-Za-z]/g, '')" required>
  <br>

  <label for="idade">Idade:</label>
  <input type="number" id="idade" placeholder="Digite sua idade" min="0" required>
  <br>

  <label for="linguagem">Linguagem:</label>
  <input type="text" id="linguagem" pattern="[A-Za-z]+" placeholder="Digite a linguagem que está aprendendo" oninput="this.value = this.value.replace(/[^A-Za-z]/g, '')" required>
  <br>

  <div class="BotaoSelecionar">
    <label for="opcao">Você gosta de estudar programação?</label>
    <input type="radio" id="sim" name="opcao" value="sim" required>
    <label for="sim">Sim</label>

    <input type="radio" id="nao" name="opcao" value="nao" required>
    <label for="nao">Não</label>
  </div>

  <input type="submit" value="Enviar">
</form>

<script>
  function LerMensagem() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const linguagem = document.getElementById('linguagem').value;
    const escolha = document.querySelector('input[name="opcao"]:checked');

    if (!nome || !idade || !linguagem || !escolha) {
      alert('Preencha todos os dados pedidos');
      return;
    }

    let mensagem = Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!\n;

    if (escolha.value === 'sim') {
      mensagem += 'Que legal, você gosta de estudar programação!';
    } else {
      mensagem += 'Nossa, não esperava essa resposta!';
    }

    alert(mensagem);
  }
</script>