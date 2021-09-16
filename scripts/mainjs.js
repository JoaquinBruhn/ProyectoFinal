//AOS esta por las dudas por si se puede usar despues
AOS.init();

//se le ejecuta la funcion para armar el HTML a los 3 arrays, y el string va a servir para que el ID de los objetos sea unico
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
            carrito.push(producto);
            console.log(carrito);
            mostrarCarrito(producto);
        });
        
    });
}

//Funcion para agregar al carrito
function mostrarCarrito(producto) {
    //tamplate del item agregado
    $('#carrito').append(`
        <div class="col-md-4" id="removeCarrito${producto.id}">
            <h4 class="article__paragraph__fuente">${producto.nombre}</h4>
            <figure class="figure">
                <a href="#"><img src="${producto.imgSrc}" class="figure-img img-fluid rounded w:50% h:50%" alt="Collar Audaz"></a>
                <figcaption class="figure-caption text-right figure__CaptionBackground__color figure__figCaption__fuentes">$ ${producto.precio} .</figcaption>
            </figure>
            <button type="button" class="btn btn-outline-light" id="carrito${producto.id}"><h3 class="footer__links__fuente text-decoration-none m-0">Eliminar del carrito</h3></button>
        </div>
        `)
        //Dandole un efecto de fadeIn
        $(`#removeCarrito${producto.id}`).hide()
        $(`#removeCarrito${producto.id}`).fadeIn(500)
        //Evento para sacar el item del carrito
        $(`#carrito${producto.id}`).click(function () {
            carrito.splice(carrito.indexOf(producto),1);
            console.log(carrito);
            //Efecto fadeOut que elimina el item del HTML despues del fade
            $(`#removeCarrito${producto.id}`).fadeOut(500,()=>{
                $(`#removeCarrito${producto.id}`).remove()
            })
        });
}
