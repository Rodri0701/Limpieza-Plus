// Productos
var productos = [
    { nombre: "Ariel de 5L", descripcion: "Contiene una fórmula que te permite usar menos producto por carga de lavado.", precio: "$100", imagen: "imagenes/1.png", url: "detalle.html" },
    { nombre: "Lysol", descripcion: "Este producto cuenta con envase recargable para contribuir al medio ambiente.", precio: "$7.99", imagen: "imagenes/2.png", url: "detalle2.html" },
    { nombre: "Windex", descripcion: "¡Con Windex añade brillo a tu vida! Es nuestra mejor solución para iluminar y dar brillo a su hogar.", precio: "$4.99", imagen: "imagenes/3.jpeg", url: "detalle3.html" },
    { nombre: "Lysol Pro|", descripcion: "Contiene una solución que se disuelve con agua, ofreciendo una solución más compacta y fácil de almacenar.", precio: "$6.99", imagen: "imagenes/4.jpg", url: "detalle4.html" },
    { nombre: "Harpic Power Ultra Todo en 1 Original 2 Pack 750ml c/u", descripcion: "Su fórmula biodegradable permite desatascar las tuberías de manera efectiva y sin dañarlas.", precio: "$110.00", imagen: "imagenes/5.jpg", url: "detalle5.html" },
    { nombre: "Vanish Quitamanchas en Gel Multiusos para Ropa de Color 3.6 L", descripcion: "Funciona a temperatura más baja ayudando a ahorrar energía y proteger los tejidos delicados.", precio: "$179.00", imagen: "imagenes/6.png", url: "detalle6.html" },
    { nombre: "Pinol El Original limpiador multiusos desinfectante pino 3.7 lt", descripcion: "Fórmula biodegradable que contribuye al impacto ambiental.", precio: "$179.00", imagen: "imagenes/pinolito.jpg", url: "detalle7.html" },
    { nombre: "Limpiador líquido Fabuloso aroma lavanda 1L", descripcion: "Su fórmula de dosificación permite a los usuarios mezclar el producto de mejor manera.", precio: "$25.00", imagen: "imagenes/Fabuloso.jpg", url: "detalle8.html" },
    { nombre: "Cloralex Toallas Desinfectantes Húmedas, 48 Piezas", descripcion: "Su nuevo material biodegradable ayuda a reducir el impacto ambiental.", precio: "$25.00", imagen: "imagenes/10.jpg", url: "detalle9.html" },
    { nombre: "Aromatizante ambiental Glade campos de lavanda en aerosol 270 ml", descripcion: "Fragancias naturales que ofrecen una opción amigable con el medio ambiente.", precio: "$45.00", imagen: "imagenes/glade.webp", url: "detalle10.html" }
  ];
  
  var productContainer = document.getElementById('productContainer');
  
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
  
    link.appendChild(button);
    content.appendChild(name);
    content.appendChild(description);
    content.appendChild(price);
    content.appendChild(link);
    card.appendChild(img);
    card.appendChild(content);
  
    productContainer.appendChild(card);
  });
  