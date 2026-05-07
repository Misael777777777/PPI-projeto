const usuario = localStorage.getItem("usuarioLogado");

document.getElementById("nomeUsuario").textContent =
  usuario;

const mensagens =
  document.getElementById("mensagens");

document
  .getElementById("btnEnviar")
  .addEventListener("click", () => {

    const input =
      document.getElementById("inputMensagem");

    if (input.value.trim() === "") return;

    const div = document.createElement("div");

    div.innerHTML =
      `<strong>${usuario}:</strong> ${input.value}`;

    mensagens.appendChild(div);

    input.value = "";
  });

document
  .getElementById("logout")
  .addEventListener("click", () => {

    localStorage.removeItem("usuarioLogado");

    window.location.href = "index.html";
  });
