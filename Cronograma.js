window.onload = function () {
  // Verificar si el usuario está en un dispositivo móvil
  if (window.innerWidth > 800) {
    // Redirigir a la versión móvil si el tamaño de la pantalla es mayor a 800px (es decir, un dispositivo de escritorio)
    window.location.replace("https://www.tusitio.com/movil-version"); // Reemplaza la URL con la dirección correcta
  }

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
};