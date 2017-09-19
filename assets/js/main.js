function cycleBackgrounds() {
  var index = 0;

  $imageEls = $('.toggle-image'); // rotar entre las imagenes.

  setInterval(function () {
    // Recoger prÃ³xima posicion de index.  Si llega al final, volver al principio
    index = index + 1 < $imageEls.length ? index + 1 : 0;
    // Mostrar siguiente imagen.
    $imageEls.eq(index).addClass('show');
    // Ocultar imagen anterior.
    $imageEls.eq(index - 1).removeClass('show');

  }, 6000);
};

$(function () {
  cycleBackgrounds();
});