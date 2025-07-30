document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  function navigateToPage(url) {
    const body = document.body;
    body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = url;
    }, 500);
  }

  const btnInicio = document.getElementById("btn-inicio");
  if (btnInicio) {
    console.log("Redirigiendo a inicio...");
    btnInicio.addEventListener("click", () => {
      navigateToPage("../Inicio/index.html");
    });
  }

  const btnBandeja = document.getElementById("btn-bandeja");
  if (btnBandeja) {
    console.log("Redirigiendo a bandeja...");
    btnBandeja.addEventListener("click", () => {
      navigateToPage();
    });
  }

  const btnTienda = document.getElementById("btn-tienda");
  if (btnTienda) {
    console.log("Redirigiendo a tienda...");
    btnTienda.addEventListener("click", () => {
      navigateToPage("../Store/store.html");
    });
  }
});
