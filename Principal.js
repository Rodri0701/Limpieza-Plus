$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });
  
  function mostrarAlerta() {
    // Mostrar una confirmación al recargar la página
    var resultado = confirm("¿Deseas leer nuestra politica de privacidad?");
  
    // Verificar la respuesta del usuario
    if (resultado) {
      // Si el usuario hace clic en "Aceptar", redireccionar a la página de términos y condiciones
      window.location.href = "Politica.html";
    } else {
      // Si el usuario hace clic en "Cancelar" o cierra la ventana emergente, no hacer nada
    }
  }
  