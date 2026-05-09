const usuarios = [

  {
    usuario: "mimmarcelo",
    senha: "Teste123"
  },

  {
    usuario: "lucas",
    senha: "123"
  },

  {
    usuario: "ryan",
    senha: "123"
  },

  {
    usuario: "andrei",
    senha: "123"
  },

  {
    usuario: "neurivan",
    senha: "123"
  }

];

const btnEntrar =
  document.getElementById("btnEntrar");

const btnDev =
  document.getElementById("btnDev");

btnEntrar.addEventListener(
  "click",
  function() {

    const usuario =
  document.getElementById("usuario").value.trim();

    const senha =
  document.getElementById("senha").value.trim();

    const usuarioValido =
      usuarios.find(function(u) {

        return (
          u.usuario === usuario &&
          u.senha === senha
        );

      });

    if (usuarioValido) {

      localStorage.setItem(
        "usuarioLogado",
        usuario
      );

      window.location.href =
        "chat.html";

    } else {

      alert(
        "Usuário ou senha inválidos!"
      );

    }

  }
);

btnDev.addEventListener(
  "click",
  function() {

    window.location.href =
      "desenvolvedores.html";

  }
);
