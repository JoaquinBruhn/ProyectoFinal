//AOS esta por las dudas por si se puede usar despues
AOS.init();

//se le ejecuta la funcion para armar el HTML a los 3 arrays, y el string va a servir para que el ID de los objetos sea unico
onLoadCantidadCarrito()
mostrarCarrito()
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

function contarTotal(producto){
    let costoTotal = localStorage.getItem(`precioTotal`);

    if(costoTotal != null){
        costoTotal = parseInt(costoTotal);
        localStorage.setItem(`precioTotal`, costoTotal + producto.precio);
    }
    else{
        localStorage.setItem(`precioTotal`, producto.precio)
    }
}

function mostrarCarrito(){
    let itemsCarrito = localStorage.getItem(`productosEnCarrito`)
    let precioTotal = localStorage.getItem(`precioTotal`)
    
    if(itemsCarrito && precioTotal != null){
        itemsCarrito = JSON.parse(itemsCarrito)

        itemsCarrito = Object.values(itemsCarrito)

        $(`.item-list`).empty();

        itemsCarrito.forEach((producto) => {
            $(`.item-list`).append(`
            <div class="items-in-cart">
                <h5>${producto.nombre}</h5>
                <div class="items-cantidad">
                    <button class="btn btn-outline-dark"><</button>
                    <h5>X${producto.cantidad}</h5>
                    <button class="btn btn-outline-dark">></button>
                </div>
            </div>`
            )
        })
        $(`.precio > h5`).text(`Precio Total: $${precioTotal}`)
    }
}
// //tamplate del item agregado
// $('#carrito').append(`
//     <div class="col-md-4" id="removeCarrito${producto.id}">
//         <h4 class="article__paragraph__fuente">${producto.nombre}</h4>
//         <figure class="figure">
//             <a href="#"><img src="${producto.imgSrc}" class="figure-img img-fluid rounded w:50% h:50%" alt="Collar Audaz"></a>
//             <figcaption class="figure-caption text-right figure__CaptionBackground__color figure__figCaption__fuentes">$ ${producto.precio} .</figcaption>
//         </figure>
//         <button type="button" class="btn btn-outline-light" id="carrito${producto.id}"><h3 class="footer__links__fuente text-decoration-none m-0">Eliminar del carrito</h3></button>
//     </div>
//     `)
//     //Dandole un efecto de fadeIn
//     $(`#removeCarrito${producto.id}`).hide()
//     $(`#removeCarrito${producto.id}`).fadeIn(500)
//     //Evento para sacar el item del carrito
//     $(`#carrito${producto.id}`).click(function () {
//         carrito.splice(carrito.indexOf(producto),1);
//         console.log(carrito);
//         //Efecto fadeOut que elimina el item del HTML despues del fade
//         $(`#removeCarrito${producto.id}`).fadeOut(500,()=>{
//             $(`#removeCarrito${producto.id}`).remove()
//         })
//     });
