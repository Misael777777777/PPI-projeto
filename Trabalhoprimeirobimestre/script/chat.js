const usuario = localStorage.getItem("usuarioLogado");

if (!usuario) {
  window.location.href = "index.html";
}

document.getElementById("nomeUsuario").textContent =
  `Usuário: ${usuario}`;

const chatsPadrao = {
  geral: [
    {
      usuario: "Sistema",
      texto: "Bem-vindo ao chat geral!"
    }
  ],

  jogos: [
    {
      usuario: "Sistema",
      texto: "Bem-vindo ao chat de jogos!"
    }
  ]
};

if (!localStorage.getItem("mensagens")) {
  localStorage.setItem(
    "mensagens",
    JSON.stringify(chatsPadrao)
  );
}

let chatAtual = "geral";

function carregarMensagens() {

  const mensagens = JSON.parse(
    localStorage.getItem("mensagens")
  );

  const areaMensagens =
    document.getElementById("mensagens");

  areaMensagens.innerHTML = "";

  mensagens[chatAtual].forEach(msg => {

    const div = document.createElement("div");

    div.classList.add("mensagem");

    div.innerHTML = `
      <strong>${msg.usuario}:</strong>
      ${msg.texto}
    `;

    areaMensagens.appendChild(div);
  });

  areaMensagens.scrollTop =
    areaMensagens.scrollHeight;
}

function trocarChat(chat) {

  chatAtual = chat;

  document.getElementById("chatTitulo").textContent =
    chat === "geral"
      ? "Chat Geral"
      : "Chat Jogos";

  carregarMensagens();
}

function enviarMensagem() {

  const input =
    document.getElementById("inputMensagem");

  const texto = input.value.trim();

  if (texto === "") return;

  const mensagens = JSON.parse(
    localStorage.getItem("mensagens")
  );

  mensagens[chatAtual].push({
    usuario: usuario,
    texto: texto
  });

  localStorage.setItem(
    "mensagens",
    JSON.stringify(mensagens)
  );

  input.value = "";

  carregarMensagens();
}

document
  .getElementById("btnEnviar")
  .addEventListener("click", enviarMensagem);

document
  .getElementById("btnGeral")
  .addEventListener("click", () => {
    trocarChat("geral");
  });

document
  .getElementById("btnJogos")
  .addEventListener("click", () => {
    trocarChat("jogos");
  });

document
  .getElementById("logout")
  .addEventListener("click", () => {

    localStorage.removeItem("usuarioLogado");

    window.location.href = "index.html";
  });

document
  .getElementById("inputMensagem")
  .addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
      enviarMensagem();
    }
  });

carregarMensagens();
