const usuarios = [

  {
    usuario: "mimmarcelo",
    senha: "Teste123"
  }

];

document
  .getElementById("btnEntrar")
  .addEventListener("click", function() {

    const usuario =
      document.getElementById("usuario").value.trim();

    const senha =
      document.getElementById("senha").value.trim();

    if (
      usuario === "mimmarcelo" &&
      senha === "Teste123"
    ) {

      localStorage.setItem(
        "usuarioLogado",
        usuario
      );

      alert(
        localStorage.getItem("usuarioLogado")
      );

      window.location.href =
        "chat.html";

    } else {

      alert("Login inválido");

    }

  });
