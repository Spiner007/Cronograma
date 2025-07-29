window.onload = function () {
    // Elementos del DOM
    const preCargar = document.getElementById('fondoDeCarga');
    const contenido = document.getElementById('contenidoPrincipal');
    const video = document.getElementById('videoFondo');
    const botonUniforme = document.getElementById('uniforme');
    const fondoModalUniforme = document.getElementById('fondoModalUniforme');
    const modalUniforme = document.getElementById('modalUniforme');
    const cerrarModalUniforme = document.getElementById('cerrarModalUniforme');
    const maximoTiempo = 3000;
    let videoCargado = false;

    // Control de carga
    if (video) {
        video.oncanplaythrough = () => {
            videoCargado = true;
            mostrarContenido();
        };
        video.onloadeddata = () => {
            videoCargado = true;
            mostrarContenido();
        };
    }

    setTimeout(() => {
        if (!videoCargado) mostrarContenido();
    }, maximoTiempo);

    function mostrarContenido() {
        if (preCargar) preCargar.style.display = 'none';
        if (contenido) contenido.style.display = 'block';
    }

    // Modal de uniforme
    if (botonUniforme && fondoModalUniforme && modalUniforme && cerrarModalUniforme) {
        botonUniforme.addEventListener('click', () => {
            fondoModalUniforme.style.display = "flex";
        });

        cerrarModalUniforme.onclick = () => {
            fondoModalUniforme.style.display = "none";
        };

        window.addEventListener("click", (event) => {
            if (event.target === fondoModalUniforme) {
                fondoModalUniforme.style.display = "none";
            }
        });
    }

    // Control de música
    const audio = new Audio("dios.mp3");
    audio.loop = true;
    audio.currentTime = 0;
    let estaReproduciendo = false;
    const botonMusica = document.getElementById("controlMusica");

    if (botonMusica) {
        botonMusica.addEventListener("click", () => {
            if (!estaReproduciendo) {
                audio.play();
                estaReproduciendo = true;
                botonMusica.textContent = "⏸️ Pausar música";
            } else {
                audio.pause();
                estaReproduciendo = false;
                botonMusica.textContent = "▶️ Reanudar música";
            }
        });
    }

    window.addEventListener("beforeunload", () => {
        audio.pause();
        audio.currentTime = 0;
    });

    // Modal de detalles de fila
    const nombresColumnas = ["Día", "Hermano(a) 1", "Hermano(a) 2", "Instructor", "Observaciones"];
    const filas = document.querySelectorAll('table tbody tr');

    filas.forEach(fila => {
        fila.addEventListener('click', function () {
            const celdas = this.querySelectorAll("td");
            let contenidoHTML = "";

            celdas.forEach((celda, index) => {
                const nombre = nombresColumnas[index] || `Columna ${index + 1}`;
                contenidoHTML += `<strong>${nombre}:</strong> ${celda.textContent}<br>`;
            });

            const modal = document.getElementById("modal");
            const modalTexto = document.getElementById("modalTexto");
            const cerrarModal = document.getElementById("cerrarModal");

            if (modal && modalTexto && cerrarModal) {
                modalTexto.innerHTML = contenidoHTML + `<p class="mensaje-final">Gracias por tu colaboración.</p>`;
                modal.classList.remove("hidden");

                cerrarModal.onclick = () => modal.classList.add("hidden");

                window.addEventListener("click", function (event) {
                    if (event.target === modal) {
                        modal.classList.add("hidden");
                    }
                });
            }
        });
    });
};