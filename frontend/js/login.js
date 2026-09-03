const contraseña = document.getElementById("password-login");
const oculto = document.getElementById("toggle-login");

oculto.addEventListener("click", () => {
    const inputType = contraseña.getAttribute("type");
    if (inputType === "password") {
        contraseña.setAttribute("type", "text")
    } else  {
        contraseña.setAttribute("type", "password")
    }
})

const usuario = document.getElementById("usuario");
const boton = document.getElementById("btn-auth");

