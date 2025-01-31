window.onload = function () {
 
  if (window.innerWidth > 800) {
    
    window.location.replace("https://spiner007.github.io/Cronograma/"); 
  }

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
};
