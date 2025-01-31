function forzarVistaMovil() {
    // 1. Cambiar el viewport para simular un móvil
    let meta = document.querySelector("meta[name=viewport]");
    if (meta) {
        meta.setAttribute("content", "width=375, user-scalable=no"); // Simula un móvil
    } else {
        meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = "width=375, user-scalable=no";
        document.head.appendChild(meta);
    }

    // 2. Recargar la página para aplicar los cambios
    setTimeout(() => {
        location.reload();
    }, 500);
}

// Detectar si el usuario está en "Modo Escritorio" y aplicar la función
window.onload = function () {
    const esModoEscritorio = navigator.userAgent.toLowerCase().includes("android") &&
                             navigator.userAgent.toLowerCase().includes("chrome") &&
                             !navigator.userAgent.toLowerCase().includes("mobile");

    if (esModoEscritorio) {
        forzarVistaMovil(); // Llama a la función para cambiar a móvil
    }
};