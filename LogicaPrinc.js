// Función para cargar datos JSON en localStorage
function CargarDatosJson() {
    // Cargar productos.json
    fetch('data/productos.json')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('productos', JSON.stringify(data));
        console.log('Productos cargados en localStorage:', data);
      })
      .catch(error => console.error('Error al cargar productos.json:', error));
  
    // Cargar usuarios.json
    fetch('data/usuarios.json')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('usuarios', JSON.stringify(data));
        console.log('Usuarios cargados en localStorage:', data);
      })
      .catch(error => console.error('Error al cargar usuarios.json:', error));
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Llamar a la función para cargar datos JSON en localStorage
    CargarDatosJson();
  
    // Renderizar productos después de cargar los datos
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    renderizarProductos(productos);
  });
  
  function renderizarProductos(productos) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';
  
    productos.forEach(producto => {
      const card = document.createElement('div');
      card.classList.add('tarjeta-producto');
  
      const img = document.createElement('img');
      img.src = producto.Imagen1;
      img.alt = producto.Nombre;
      img.title = producto.Nombre;
  
      const content = document.createElement('div');
      content.classList.add('contenido');
  
      const name = document.createElement('h2');
      name.textContent = producto.Nombre;
  
      const description = document.createElement('p');
      description.textContent = producto.Descripcion;
  
      const price = document.createElement('p');
      price.classList.add('precio');
      price.textContent = `$${producto.Precio} Mx`;
  
      content.appendChild(name);
      content.appendChild(description);
      content.appendChild(price);
  
      card.appendChild(img);
      card.appendChild(content);
      productContainer.appendChild(card);
    });
  }
  