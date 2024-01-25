let linhas = ""; //para adicionar linhas novas
const form = document.getElementById("form-contato");
const nomeContato = []; //array de atividades vazio

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  //capturar os campos de nome da atividade e nota
  const inputNomeContato = document.getElementById("nome-contato");
  const inputTelefone = document.getElementById("telefone");

  let linha = "<tr>"; //pense que esse TR abre o escopo para o codigo a seguir

  if (nomeContato.includes(inputNomeContato.value)) {
    alert(`O contato: ${inputNomeContato.value} já foi inserido`);
  } else {
    nomeContato.push(inputNomeContato.value); //puxar todo array de atividade preenchido pelo usuario
    //isso tudo é basicamente uma operaçao logica para a variavel linha
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;

    linha += "</tr>"; //e esse tr fecha o escopo para o codigo acima
    linhas += linha; //adiciona linhas novas para cada submit
  }

  //para limpar os inputs depois de clicar em submit
  inputNomeContato.value = "";
  inputTelefone.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas; //necessario usar a variavel linhas para a criação de novas linhas, se usarmos a variavel linha ele só vai substituir a linha criada
}
