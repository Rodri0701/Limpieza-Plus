// Productos
// Función para cargar productos desde el archivo JSON
function cargarProductos() {
  fetch('/data/productos.json') // Actualiza esta ruta con la ubicación real de tu archivo JSON
    .then(response => response.json())
    .then(data => {
      productos = data.map(producto => ({
        nombre: producto.Nombre,
        descripcion: producto.Descripcion,
        precio: `$${producto.Precio} Mx`,
        imagen: producto.Imagen1,
        url: `detalle.html?id=${producto.ID}` // Ajusta esto según la estructura de tu sitio
      }));
      renderizarProductos();
    })
    .catch(error => console.error('Error al cargar los productos:', error));
}

function renderizarProductos() {
  var productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = '';
  productos.forEach(producto => {
      var card = document.createElement('div');
      card.classList.add('tarjeta-producto');
      var img = document.createElement('img');
      img.src = producto.imagen;
      img.alt = producto.nombre;
      img.title = producto.nombre;
      var content = document.createElement('div');
      content.classList.add('contenido');
      var name = document.createElement('h2');
      name.textContent = producto.nombre;
      var description = document.createElement('p');
      description.textContent = producto.descripcion;
      var price = document.createElement('p');
      price.classList.add('precio');
      price.textContent = producto.precio;
      var link = document.createElement('a');
      link.href = producto.url;
      var button = document.createElement('button');
      button.classList.add('boton');
      button.textContent = "Ver detalles";

      var cartButton = document.createElement('button');
      cartButton.classList.add('boton', 'boton-carrito');
      cartButton.textContent = "Agregar al carrito";

      // Agregar evento click al botón "Agregar al carrito"
      cartButton.addEventListener('click', function() {
        agregarAlCarrito(producto);
      });

      var favoritesButton = document.createElement('button');
      favoritesButton.classList.add('boton', 'boton-favoritos');
      favoritesButton.textContent = "Agregar a favoritos";

      // Agregar evento click al botón "Agregar a favoritos"
      favoritesButton.addEventListener('click', function() {
        agregarAFavoritos(producto);
      });

      link.appendChild(button);
      content.appendChild(name);
      content.appendChild(description);
      content.appendChild(price);
      content.appendChild(link);
      content.appendChild(cartButton); // Agregar el botón "Agregar al carrito"
      content.appendChild(favoritesButton); // Agregar el botón "Agregar a favoritos"
      card.appendChild(img);
      card.appendChild(content);
      productContainer.appendChild(card);
  });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  var productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
  productosEnCarrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
  alert("Producto agregado al carrito");
}

// Función para agregar un producto a la lista de favoritos
function agregarAFavoritos(producto) {
  var productosEnFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  productosEnFavoritos.push(producto);
  localStorage.setItem('favoritos', JSON.stringify(productosEnFavoritos));
  alert("Producto agregado a favoritos");
}


/* Inicio de la funcion para ordenar */
function ordenarAZ() {
  productos.sort((a, b) => a.nombre.localeCompare(b.nombre)); /* Comparamos alfaberticamente para agregar cual antes y despues */
  renderizarProductos(); /* Llamamos ala funcion de renderizar en la parte de arriba */
  alert('Productos ordenados de A a Z'); /* Mensaje que se aplico el cambio */
}
/* Fin de la funcion para ordenar */

/* Inicio de la funcion para ordenar de la Z -A */
function ordenarZA() {
  productos.sort((a, b) => b.nombre.localeCompare(a.nombre)); /* Comparamos cual es la utlima para ordenarla */
  renderizarProductos(); /* Llamamos a la funcion con la posibilidad de renderizar */
  alert('Productos ordenados de Z a A'); /* Mensaje de confirmación */
}
/* Fin de la funcion */

/* Inicio de la funcion para organizar por precios  */
function ordenarPrecioMayorMenor() {
  productos.sort((a, b) => {
      // Convertir el precio de string a número para compararlo
      let precioA = parseFloat(a.precio.replace('$', '').replace(' Mx', ''));
      let precioB = parseFloat(b.precio.replace('$', '').replace(' Mx', ''));
      return precioB - precioA;/* Retornamos el precio ya ordenado */
  });
  renderizarProductos(); /* Volvemos a renderizar */
  alert('Productos ordenados por precio de mayor a menor');/* Mensaje de confirmación */
}
/* Fin de la función */

/* Inicio de la funcion para ordenar el precio de menor a mayor */
function ordenarPrecioMenorMayor() {
  productos.sort((a, b) => {
      // Convertir el precio de string a número para compararlo
      let precioA = parseFloat(a.precio.replace('$', '').replace(' Mx', ''));
      let precioB = parseFloat(b.precio.replace('$', '').replace(' Mx', ''));
      return precioA - precioB; /* Retornammos el precio ordenado */
  });
  renderizarProductos(); /* Volvemos a renderizar */
  alert('Productos ordenados por precio de menor a mayor'); /* Mensaje de confirmacion */
}

/* Funcion para recargar la pagina y conservar los cambios */
window.onload = function() {
  mostrarAlerta();
  renderizarProductos(); /* Se renderiza */
  document.getElementById('sortAZButton').addEventListener('click', ordenarAZ);  /* Se obtiene la funcion del boton y se manda a llamar su funcion */
  document.getElementById('sortZAButton').addEventListener('click', ordenarZA); /* Se obtiene la funcion del boton y se manda a llamar su funcion */
  document.getElementById('sortPrecioButton').addEventListener('click', ordenarPrecioMayorMenor); /* Se obtiene la funcion del boton y se manda a llamar su funcion */
  document.getElementById('sortPrecioMenorButton').addEventListener('click', ordenarPrecioMenorMayor); /* Se obtiene la funcion del boton y se manda a llamar su funcion */
};

// Función para manejar la búsqueda de productos
function buscarProducto() {
  // Obtener el valor ingresado en el campo de búsqueda
  var searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

  // Filtrar la lista de productos para encontrar coincidencias con el término de búsqueda
  var resultados = productos.filter(function(producto) {
    return producto.nombre.toLowerCase().includes(searchTerm);
  });

  // Mostrar los resultados de la búsqueda en la página HTML
  var productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = '';

  if (resultados.length > 0) {
    // Si se encontraron resultados, renderizar los productos coincidentes
    resultados.forEach(function(producto) {
      var card = document.createElement('div');
      card.classList.add('tarjeta-producto');

      var img = document.createElement('img');
      img.src = producto.imagen;
      img.alt = producto.nombre;
      img.title = producto.nombre;

      var content = document.createElement('div');
      content.classList.add('contenido');

      var name = document.createElement('h2');
      name.textContent = producto.nombre;

      var description = document.createElement('p');
      description.textContent = producto.descripcion;

      var price = document.createElement('p');
      price.classList.add('precio');
      price.textContent = producto.precio;

      var link = document.createElement('a');
      link.href = producto.url;

      var button = document.createElement('button');
      button.classList.add('boton');
      button.textContent = "Ver detalles";

      link.appendChild(button);
      content.appendChild(name);
      content.appendChild(description);
      content.appendChild(price);
      content.appendChild(link);
      card.appendChild(img);
      card.appendChild(content);
      productContainer.appendChild(card);
    });
  } else {
    // Si no se encontraron resultados, mostrar un mensaje en la página
    productContainer.textContent = 'No se encontraron resultados para la búsqueda: ' + searchTerm;
  }
}

// Asignar la función buscarProducto al evento click del botón de búsqueda
document.getElementById('searchButton').addEventListener('click', buscarProducto);

 /* *----------------------*-------------- */

 // Función para cargar productos desde localStorage
function loadProductsFromLocalStorage() {
  const storedProducts = localStorage.getItem('products');
  if (storedProducts) {
    products = JSON.parse(storedProducts);
    localStorage.removeItem('products'); // Eliminar los productos del localStorage
  }
}



// Ejemplo de cómo podría ser la función loadProductsFromLocalStorage
function loadProductsFromLocalStorage() {
  // Simulación de carga de productos desde localStorage
  const storedProducts = localStorage.getItem('products');
  if (storedProducts) {
    products = JSON.parse(storedProducts);
  } else {
    products = []; // Si no hay productos en localStorage, inicializa un array vacío.
  }
}

// Evento de carga de la página
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  document.getElementById("btnAdd").addEventListener("click", openModal);
  document.querySelector(".close").addEventListener("click", closeModal);
  document.getElementById("productForm").addEventListener("submit", function(event) {
    const productId = document.getElementById("productId").value;
    if (productId) {
      updateProduct(event);
    } else {
      addProduct(event);
    }
  });
});
