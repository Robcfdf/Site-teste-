function mostrarSaudacao() {
  let idioma = document.getElementById("idioma").value;
  let saudacao = "";

  switch (idioma) {
    case "pt":
      saudacao = "Olá, seja bem-vindo!";
      break;
    case "en":
      saudacao = "Hello, welcome!";
      break;
    case "es":
      saudacao = "¡Hola, bienvenido!";
      break;
    case "fr":
      saudacao = "Bonjour, bienvenue!";
      break;
    default:
      saudacao = "Por favor, selecione um idioma.";
  }

  document.getElementById("saudacao").textContent = saudacao;
}
