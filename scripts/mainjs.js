//AOS esta por las dudas por si se puede usar despues
AOS.init();

//se le ejecuta la funcion para armar el HTML a los 3 arrays, y el string va a servir para que el ID de los objetos sea unico
onLoadCantidadCarrito()
mostrarCarrito()
botonesCarrito()
mostrarProductos(accesorios, 'accesorios');
mostrarProductos(sets, 'sets');
mostrarProductos(extras, 'extras');



function mostrarProductos(productos, string) {
    for (let i = 0; i < productos.length; i++) {
        //al product ID se le agrega el string que el FOR esta recorriendo en el momento y le da un numero unico para que el ID no se repita 
        productos[i].id = string + i
    }
    
    productos.forEach((producto) => {
        //template para poner los items en el HTML, los ordena segun el array do donde salen
        $(`#productos-${string}`).append(`
            <div class="col-md-4">
            <h4 class="article__paragraph__fuente">${producto.nombre}</h4>
            <figure class="figure">
                <a href="#"><img src="${producto.imgSrc}" class="figure-img img-fluid rounded w:50% h:50%" alt="Collar Audaz">
                </a>
                <figcaption class="figure-caption text-right figure__CaptionBackground__color figure__figCaption__fuentes">$ ${producto.precio} .
                </figcaption>
            </figure>
            <button type="button" id="${producto.id}" class="btn btn-outline-light"><h3 class="footer__links__fuente text-decoration-none m-0">Agregar al carrito</h3></button>
        </div>
        `);
        //Se le agrega el evento de onClick a el boton
        $(`#${producto.id}`).click(function () {
            cantidadCarrito(producto);
            contarTotal(producto)
            mostrarCarrito()
        });
        
    });
}
//Cuando se ejecuta se borra el HTML correspondiente y se limpian los items del Local storage
function limpiarTodo(){
    $(`.item-list`).empty();
    $(`.precio > h5`).text(`Precio Total: $0`)
    $('.fa-shopping-cart span').text(``)
    localStorage.removeItem(`productosEnCarrito`)
    localStorage.removeItem(`precioTotal`);
    localStorage.removeItem(`cantidadCarrito`);
}
//funcion para agregarle eventos de limpieza a "limpiar carrito" y "Comprar ahora"
function botonesCarrito(){
    //cuando se le hace click a "limpiar carrito" 
    $(`.precio > button > h6`).click( function(){
        limpiarTodo()
    });
    //Lo mismo para "Comprar ahora" porque la idea no era que funcione para empezar
    $(`.precio > button > h4`).click( function(){
        limpiarTodo()
    });
}

//funcion para que no se limpie la cantidad de items en el carrito en refresh
function onLoadCantidadCarrito(){
    //busca la cantidad de local storage
    let itemsTotal = localStorage.getItem(`cantidadCarrito`);
    //si existe una cantidad la vuelve a escribir en el span y si no no modifica nada
    if(itemsTotal) {
        document.querySelector(`.fa-shopping-cart span`).textContent = itemsTotal;
    }
}

//Funcion para agregar cantidad de items al boton del carrito
function cantidadCarrito(producto) {
    //le da el valor a "itemsTotal" que este guardado en el storage
    let itemsTotal = localStorage.getItem(`cantidadCarrito`);
    //parsea el valor para transformarlo en un numero
    itemsTotal = parseInt(itemsTotal);
    //si el valor es un numero le suma uno a la cantidad de "cantidadCarrito" y del boton 
    if(itemsTotal) {
        localStorage.setItem(`cantidadCarrito`, itemsTotal + 1);
        document.querySelector(`.fa-shopping-cart span`).textContent = itemsTotal + 1;
    }
    //si el valor es NaN porque es la primera vez que se agrega un item entonces setea la propiedad "cantidadCarrito" y le da un valor de 1 igual que con el carrito
    else{
        localStorage.setItem(`cantidadCarrito`, 1);
        document.querySelector(`.fa-shopping-cart span`).textContent = 1;
    }
    //le pedimos que tambien ejecute la funcion para agregar a la lista
    registratCantidad(producto)
}

//Funcion para agregar al productos al localStorage
function registratCantidad(producto) {
    //consigue el item  en "productosEnCarrito" en forma string y lo parsea
    let itemsCarrito = localStorage.getItem(`productosEnCarrito`)
    itemsCarrito = JSON.parse(itemsCarrito);
    //se fija de que "itemsCarrto" tenga un valor de antemano
    if(itemsCarrito != null){
        //chequea si el item apretado es distinto al que estaba registrado y si lo es lo registra
        if(itemsCarrito[producto.nombre] == undefined){
            itemsCarrito = {
                ...itemsCarrito, [producto.nombre]:producto
            }
        }
        // le aumenta la cantidad en 1 al producto que se eligio
        itemsCarrito[producto.nombre].cantidad +=1;
    }
    else{
        //si "poductsOnCart" no existe le setea la cantidad en 1 al item seleccionado y clrea "itemsCarrito"
        producto.cantidad = 1;
        itemsCarrito = {
            [producto.nombre]: producto
        }
    }
    //transforma a "itemsCarrito" en un string antes de meterlo en el storage
    localStorage.setItem(`productosEnCarrito`, JSON.stringify(itemsCarrito));
}
//Funcion para crear el item de "precioTotal" que va a tener el valor de la suma de los productos elegidos y sumarle el precio de uno nuevo si el itam ya existe
function contarTotal(producto){
    //le asigna a "costoTotal" el valor del item "precioTotal" si es que existe
    let costoTotal = localStorage.getItem(`precioTotal`);
    //Condicional, "si precioTotal" existia el valor de "costoTotal" es distinto de null
    if(costoTotal != null){
        //se pasa el valor a numero para que no se contatene
        costoTotal = parseInt(costoTotal);
        //se le agrega el valor del precio del producto nuevo y se lo reescribe de vuelta como "precioTotal"
        localStorage.setItem(`precioTotal`, costoTotal + producto.precio);
    }
    else{
        //si "precioTotal" no existia antes el valor es null y en vez se crea el item "precioTotal" con el valor de ese primer producto
        localStorage.setItem(`precioTotal`, producto.precio)
    }
}
//Funcion que agrega los items comprados al carrito de compras y actualiza el precio total
function mostrarCarrito(){
    // busca la lista de objetos y el precio total del storage y los pasa a variable
    let itemsCarrito = localStorage.getItem(`productosEnCarrito`)
    let precioTotal = localStorage.getItem(`precioTotal`)
    
    //condicional para chequear que los valores existan (sirve para poder ejecutar la funcion cuando carga la pag, si no hay valores de antemano no hace nada)
    if(itemsCarrito && precioTotal != null){
        itemsCarrito = JSON.parse(itemsCarrito)
        //se buscan los values solamente para que los key no molesten el uso del forEach
        itemsCarrito = Object.values(itemsCarrito)

        //vacia el HTML del store para eliminar la lista vieja
        $(`.item-list`).empty();
        //crea el template producto por producto
        itemsCarrito.forEach((producto) => {
            $(`.item-list`).append(`
            <div class="items-in-cart">
                <h5 class="producto-nombre">${producto.nombre}</h5>
                    <h5 class="producto-cantidad">X${producto.cantidad}</h5>
                <h5 class="producto-precio">$${producto.precio * producto.cantidad}</h5>
            </div>`
            )
        })
        //setea el HTML del elemento donde va el precio total
        $(`.precio > h5`).text(`Precio Total: $${precioTotal}`)
    }
}
