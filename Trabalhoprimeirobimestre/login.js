const usuarios = [
    { user: "mimmarcelo", pass: "Teste123" },
    { user: "joao", pass: "123" },
    { user: "maria", pass: "123" },
    { user: "pedro", pass: "123" },
    { user: "ana", pass: "123" }
  ];
  
  const form = document.getElementById("loginForm");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
  
    const autenticado = usuarios.find(
      u => u.user === usuario && u.pass === senha
    );
  
    if (autenticado) {
      localStorage.setItem("usuarioLogado", usuario);
      window.location.href = "chat.html";
    } else {
      alert("Usuário ou senha inválidos!");
    }
  });
