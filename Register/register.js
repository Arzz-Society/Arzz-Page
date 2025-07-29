document.addEventListener("DOMContentLoaded", () => {
  var userRegister = document.getElementById("username");
  var passwordRegister = document.getElementById("password");
  const registerBtn = document.getElementById("submit-btn");

  document.getElementById("submit-btn").addEventListener("click", () => {
    if (userRegister.value === "" || password.value === "") {
      boxMessage.className = "messageOpen";
      hideMessage("Error: Complete los campos requeridos.", "#FF6B6B");
    } else {
      hideMessage("Correcto: Datos Ingresados Correctamente.", "green");
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1000);
    }
  });
});
