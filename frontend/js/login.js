const contraseña = document.getElementById("password-login");
const oculto = document.getElementById("toggle-login");

oculto.addEventListener("click", () => {
    const inputType = contraseña.getAttribute("type");
    if (inputType === "password") {
        contraseña.setAttribute("type", "text")
    } else  {
        contraseña.setAttribute("type", "password")
    }
});

const usuario = document.getElementById("Usuario");
const boton = document.getElementById("btn-auth");
const mensajeError = document.getElementById("mensaje-error");

boton.addEventListener("click", (event) => {
    event.preventDefault();
    const valorUsuario = usuario.value;
    const valorContraseña = contraseña.value;

    if (valorUsuario === '' || valorContraseña === '') {
        mensajeError.textContent = "Faltan datos";
        return;
    }

    mensajeError.textContent = "";

    console.log("Usuario:", valorUsuario);
    console.log("Contraseña:", valorContraseña);
});





const passwordRegistrate = document.getElementById("passwordRegistrate");
const ojoRegistro = document.getElementById("toggle-registrate");

ojoRegistro.addEventListener("click", () =>{
    const type =passwordRegistrate.getAttribute("type");
    if (type === "password") {
        passwordRegistrate.setAttribute("type", "text")
    } else  {
        passwordRegistrate.setAttribute("type", "password")
    }
});