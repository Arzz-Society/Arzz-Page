//Variables
var usuario = document.getElementById("username");
var password = document.getElementById("password");
var message = document.getElementById("mensaje");
var boxMessage = document.getElementById("boxMessage");
const loginButton = document.getElementById("login-btn");

//Inicio de programa
//Carga al iniciar
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login-btn").addEventListener("click", () => {
    if (usuario.value === "" || password.value === "") {
      boxMessage.className = "messageOpen";
      hideMessage("Error: Complete los campos requeridos.", "#FF6B6B");
    } else {
      hideMessage("Correcto: Datos Ingresados Correctamente.", "#6BFF6B");
      setTimeout(() => {
        window.location.href = "../Inicio/index.html";
      }, 1000);
    }
  });
  //lucide.createIcons();
});

//Funcion para cerrar el mensaje
function hideMessage(text, color) {
  //Text es el mensaje
  //Color es el color de la caja de mensaje
  //No importa los nombre de las variables ya que son nombres para especificar
  //que estas recibieno el orden si importa, si primero text luego color
  message.textContent = text;

  boxMessage.style.backgroundColor = color;
  setTimeout(() => {
    message.textContent = "";
    boxMessage.style.display = "none";
    boxMessage.className = "message";
  }, 1500);
  return;
}
