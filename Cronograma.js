window.onload = function () {

  const preCargar = document.getElementById('fondoDeCarga');
  const contenedor = document.getElementById('progresoDelCirculo');
  const cells = document.querySelectorAll('table td');

  const backgroundImage = new Image();
  backgroundImage.src = 'imagenes/difinitio.jpg';
  const maximoTiempo = 3000;

  let imagenCargada = false;


  backgroundImage.onload = function () {
    imagenCargada = true;

    if (preCargar) preCargar.style.display = 'none';
    if (contenedor) contenedor.style.display = 'block';
  };


  setTimeout(() => {
    if (!imagenCargada) {
      if (preCargar) preCargar.style.display = 'none';
      if (contenedor) contenedor.style.display = 'block';
    }
  }, maximoTiempo);


  function Alert() {
    alert("Recuerda estar 1 hora antes, ¡Gracias por tu colaboración!");
  }

  cells.forEach(function (cell) {
    cell.addEventListener('click', Alert);
  });

  function alertaModoEscritorio() {
    alert("¡Tienes activado el modo escritorio! Para una mejor visualización en tu dispositivo móvil, te recomendamos desactivarlo.");
  }


  if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) && window.innerWidth > 1024) {
    alertaModoEscritorio();
  }
};
