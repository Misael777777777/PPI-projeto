const usuario =
  localStorage.getItem("usuarioLogado");

document.getElementById("nomeUsuario").innerText =
  "Usuário: " + usuario;

const areaMensagens =
  document.getElementById("mensagens");

const botaoEnviar =
  document.getElementById("btnEnviar");

const inputMensagem =
  document.getElementById("inputMensagem");

function carregarMensagens() {

  const mensagensSalvas =
    JSON.parse(localStorage.getItem("mensagens")) || [];

  areaMensagens.innerHTML = "";

  mensagensSalvas.forEach(function(msg) {

    const novaMensagem =
      document.createElement("div");

    novaMensagem.innerHTML =
      "<strong>" +
      msg.usuario +
      ":</strong> " +
      msg.texto;

    areaMensagens.appendChild(novaMensagem);

  });

}

function enviarMensagem() {

  const texto =
    inputMensagem.value.trim();

  if (texto === "") return;

  const mensagensSalvas =
    JSON.parse(localStorage.getItem("mensagens")) || [];

  mensagensSalvas.push({

    usuario: usuario,
    texto: texto

  });

  localStorage.setItem(
    "mensagens",
    JSON.stringify(mensagensSalvas)
  );

  inputMensagem.value = "";

  carregarMensagens();

}

botaoEnviar.addEventListener(
  "click",
  enviarMensagem
);

carregarMensagens();
