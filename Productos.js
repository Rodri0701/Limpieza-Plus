// Productos
var productos = [
  { nombre: "Ariel de 5L", descripcion: "Contiene una fórmula que te permite usar menos producto por carga de lavado.", precio: "$100 Mx", imagen: "imagenes/1.png", url: "detalle.html" },
  { nombre: "Lysol", descripcion: "Este producto cuenta con envase recargable para contribuir al medio ambiente.", precio: "$90 Mx", imagen: "imagenes/2.png", url: "detalle2.html" },
  { nombre: "Windex", descripcion: "¡Con Windex añade brillo a tu vida! Es nuestra mejor solución para iluminar y dar brillo a su hogar.", precio: "$60 Mx", imagen: "imagenes/3.jpeg", url: "detalle3.html" },
  { nombre: "Lysol Pro|", descripcion: "Contiene una solución que se disuelve con agua, ofreciendo una solución más compacta y fácil de almacenar.", precio: "$80 Mx", imagen: "imagenes/4.jpg", url: "detalle4.html" },
  { nombre: "Harpic Power Ultra", descripcion: "Su fórmula biodegradable permite desatascar las tuberías de manera efectiva y sin dañarlas.", precio: "$70 Mx", imagen: "imagenes/5.png", url: "detalle5.html" },
  { nombre: "Vanish Quitamanchas en Gel Multiusos para Ropa de Color 3.6 L", descripcion: "Funciona a temperatura más baja ayudando a ahorrar energía y proteger los tejidos delicados.", precio: "$179 Mx", imagen: "imagenes/6.png", url: "detalle6.html" },
  { nombre: "Pinol El Original limpiador multiusos desinfectante pino 3.7 lt", descripcion: "Fórmula biodegradable que contribuye al impacto ambiental.", precio: "$110 Mx", imagen: "imagenes/7.png", url: "detalle7.html" },
  { nombre: "Limpiador líquido Fabuloso aroma lavanda 1L", descripcion: "Su fórmula de dosificación permite a los usuarios mezclar el producto de mejor manera.", precio: "$25 Mx", imagen: "imagenes/8.png", url: "detalle8.html" },
  { nombre: "Cloralex Toallas Desinfectantes Húmedas, 48 Piezas", descripcion: "Su nuevo material biodegradable ayuda a reducir el impacto ambiental.", precio: "$60 Mx", imagen: "imagenes/10.jpg", url: "detalle9.html" },
  { nombre: "Aromatizante ambiental Glade campos de lavanda en aerosol 270 ml", descripcion: "Fragancias naturales que ofrecen una opción amigable con el medio ambiente.", precio: "$45 Mx", imagen: "imagenes/glade.webp", url: "detalle10.html" }
];

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

// Llamar a la función para cargar y mostrar los productos
loadProducts();

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
