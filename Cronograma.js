window.onload = function () {

  const preCargar = document.getElementById('fondoDeCarga');
  const contenedor = document.getElementById('progresoDelCirculo');
  const cells = document.querySelectorAll('table td');

  const backgroundImage = new Image();
  backgroundImage.src = 'imagenes/difinitio.jpg';
  const maximoTiempo = 3000;

  let imagenCargada = false;

  // Forzar la eliminación de la clase "modo-escritorio" siempre que se cargue la página
  document.body.classList.remove("modo-escritorio");

  // Carga de la imagen y manejo de la pantalla de carga
  backgroundImage.onload = function () {
    imagenCargada = true;

    if (preCargar) preCargar.style.display = 'none';
    if (contenedor) contenedor.style.display = 'block';
  };

  // Si la imagen no carga en el tiempo esperado, mostramos el contenido
  setTimeout(() => {
    if (!imagenCargada) {
      if (preCargar) preCargar.style.display = 'none';
      if (contenedor) contenedor.style.display = 'block';
    }
  }, maximoTiempo);

  // Función para mostrar el alerta cuando se hace clic en una celda
  function Alert() {
    alert("Recuerda estar 1 hora antes, ¡Gracias por tu colaboración!");
  }

  // Añadir el evento de clic a todas las celdas de la tabla
  cells.forEach(function (cell) {
    cell.addEventListener('click', Alert);
  });

}
