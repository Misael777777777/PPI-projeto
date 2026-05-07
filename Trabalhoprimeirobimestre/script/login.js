const usuario = localStorage.getItem("usuarioLogado");

if (!usuario) {
  window.location.href = "index.html";
}

document.getElementById("nomeUsuario").textContent =
  `Usuário: ${usuario}`;

if (!localStorage.getItem("mensagens")) {

  const mensagensIniciais = [
    {
      usuario: "Sistema",
      texto: "Bem-vindo ao chat!"
    }
  ];

  localStorage.setItem(
    "mensagens",
    JSON.stringify(mensagensIniciais)
  );
}

function carregarMensagens() {

  const mensagens = JSON.parse(
    localStorage.getItem("mensagens")
  );

  const areaMensagens =
    document.getElementById("mensagens");

  areaMensagens.innerHTML = "";

  mensagens.forEach(msg => {

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

function enviarMensagem() {

  const input =
    document.getElementById("inputMensagem");

  const texto = input.value.trim();

  if (texto === "") return;

  const mensagens = JSON.parse(
    localStorage.getItem("mensagens")
  );

  mensagens.push({
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
  .getElementById("inputMensagem")
  .addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
      enviarMensagem();
    }
  });

document
  .getElementById("logout")
  .addEventListener("click", () => {

    localStorage.removeItem("usuarioLogado");

    window.location.href = "index.html";
  });

carregarMensagens();
