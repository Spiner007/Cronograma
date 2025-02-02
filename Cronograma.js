window.onload = function () {
  const preCargar = document.getElementById('fondoDeCarga');
  const contenedor = document.getElementById('progresoDelCirculo');
  const cells = document.querySelectorAll('table td');
  const botonUniforme = document.getElementById('uniforme');

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

 
   
    if (botonUniforme) {
      botonUniforme.addEventListener('click', function () {
          alert("Martes: Camisa blanca.\nJueves: Camisa blanca.\nSábado: Camisa azul.\nDomingo: Camisa azul.");
      });
  }


  const filaPrincipal = document.querySelector("table tr:nth-child(4)");
  const filaApoyo = document.querySelector(".apoyo-body");

  if (filaPrincipal && filaApoyo) {
      filaPrincipal.addEventListener("mouseenter", function () {
          filaApoyo.classList.add("hover-aplicado");
      });

      filaPrincipal.addEventListener("mouseleave", function () {
          filaApoyo.classList.remove("hover-aplicado");
      });
  }
};









