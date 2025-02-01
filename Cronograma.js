window.onload = function () {

  const preCargar = document.getElementById('fondoDeCarga');
  const contenedor = document.getElementById('progresoDelCirculo');
  const cells = document.querySelectorAll('table td');

  const backgroundImage = new Image();
  backgroundImage.src = 'imagenes/difinitio.jpg';
  const maximoTiempo = 3000;

  let imagenCargada = false;

  // Cargar imagen
  backgroundImage.onload = function () {
    imagenCargada = true;

    if (preCargar) preCargar.style.display = 'none';
    if (contenedor) contenedor.style.display = 'block';
  };

  // Si la imagen no se carga a tiempo
  setTimeout(() => {
    if (!imagenCargada) {
      if (preCargar) preCargar.style.display = 'none';
      if (contenedor) contenedor.style.display = 'block';
    }
  }, maximoTiempo);

  // Función de alerta
  function Alert() {
    alert("Recuerda estar 1 hora antes, ¡Gracias por tu colaboración!");
  }

  // Añadir evento de click a las celdas
  cells.forEach(function (cell) {
    cell.addEventListener('click', Alert);
  });

  // Función para mostrar alerta en dispositivos móviles sobre el modo escritorio activado
  function alertaModoEscritorio() {
    alert("¡Estás utilizando el modo escritorio! Para una mejor visualización en tu dispositivo móvil, te recomendamos desactivar esta opción.");
  }

  // Verificar si el dispositivo es móvil
  if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    alertaModoEscritorio();
  }
};
