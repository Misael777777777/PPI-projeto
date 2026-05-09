const usuarios = [
  { usuario: "mimmarcelo", senha: "Teste123" },
  { usuario: "lucas", senha: "123" },
  { usuario: "ryan", senha: "123" },
  { usuario: "andrei", senha: "123" },
  { usuario: "neurivan", senha: "123" }
];

document
  .getElementById("btnEntrar")
  .addEventListener("click", function() {

    const usuario =
      document.getElementById("usuario").value;

    const senha =
      document.getElementById("senha").value;

    const usuarioValido =
      usuarios.find(u =>
        u.usuario === usuario &&
        u.senha === senha
      );

    if (usuarioValido) {

      localStorage.setItem(
        "usuarioLogado",
        usuario
      );

      window.location.href = "chat.html";

    } else {

      alert("Usuário ou senha inválidos!");

    }

  });

document
  .getElementById("btnDev")
  .addEventListener("click", function() {

    window.location.href =
      "desenvolvedores.html";

  });
