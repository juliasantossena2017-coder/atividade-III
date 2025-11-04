document.addEventListener("DOMContentLoaded", () => {
  const ano = document.getElementById("ano");
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.querySelector("nav ul");

  // Atualiza o ano no rodapé
  ano.textContent = new Date().getFullYear();

  // Menu mobile
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // Fechar menu ao clicar em um link (mobile)
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const alvo = document.querySelector(link.getAttribute("href"));
      if (alvo) {
        alvo.scrollIntoView({ behavior: "smooth" });
        menu.classList.remove("open");
      }
    });
  });

  // Formulário
  const form = document.getElementById("formContato");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("💌 Obrigado pela mensagem! Entraremos em contato e