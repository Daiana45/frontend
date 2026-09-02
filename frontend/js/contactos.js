const form = document.getElementById('formContacto');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const terminos = document.getElementById('terminos');

const errorNombre = document.getElementById('error-nombre');
const errorEmail = document.getElementById('error-email');
const errorAsunto = document.getElementById('error-asunto');
const errorMensaje = document.getElementById('error-mensaje');

const mensajeExito = document.getElementById('mensajeExito');





form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    let esValido = true;

    if(nombre.value.trim() === '') {
        errorNombre.textContent = 'El nombre es obligatorio';
        esValido = false
    } else {
        errorNombre.textContent = '';
    }

    const valorEmail = email.value.trim();
    const tieneArroba = valorEmail.includes('@');
    const tienePunto = valorEmail.includes('.');
    const posicionArroba = valorEmail.indexOf('@');
    const posicionPunto = valorEmail.indexOf('.');

    if (valorEmail === '') {
        errorEmail.textContent = 'El email es obligatorio';
        esValido = false;
    } else if (!tieneArroba || !tienePunto || posicionPunto < posicionArroba) {
        errorEmail.textContent = 'Ingresa un email valido';
        esValido = false;
    } else {
        errorEmail.textContent = '';
    }

    if (asunto.value === '') {
        errorAsunto.textContent = 'Selecciona un asunto';
        esValido = false;
    } else {
        errorAsunto.textContent = '';
    }

     const errorTerminos = document.getElementById('error-terminos');

if (!terminos.checked) {
    errorTerminos.textContent = 'Tenes que aceptar los terminos y condiciones';
    esValido = false;
} else {
    errorTerminos.textContent = '';
}

    if (mensaje.value.trim() === '') {
        errorMensaje.textContent = 'El mensaje es obligatorio';
        esValido = false;
    } else {
        errorMensaje.textContent = '';
    }

    if (esValido) {
        mensajeExito.classList.remove('d-none');
        form.reset();

        setTimeout(function (){
            mensajeExito.classList.add('d-none');
    },4000);
    } else {
        mensajeExito.classList.add('d-none')
    }
});