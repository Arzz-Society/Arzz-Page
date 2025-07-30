document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});

function navigateToPage(url) {
  const body = document.body;
  body.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

const btnIncio = document.getElementById("btn-inicio");
if (btnInicio) {
  console.log('no mames we');
  btnInicio.addEventListener('click', () => {
    navigateToPage('../Inicio/index.html');
  });
}