AOS.init();

mostrarProductos(accesorios, 'accesorios');
mostrarProductos(sets, 'sets');
mostrarProductos(extras, 'extras');



function mostrarProductos(productos, string) {
    for (let i = 0; i < productos.length; i++) {
        productos[i].id = string + i
    }
    
    productos.forEach((producto) => {
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
        $(`#${producto.id}`).click(function () {
            carrito.push(producto);
            console.log(carrito);
            mostrarCarrito(producto);
        });
        
    });
}

function mostrarCarrito(producto) {
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
        $(`#removeCarrito${producto.id}`).hide()
        $(`#removeCarrito${producto.id}`).fadeIn(500)
        $(`#carrito${producto.id}`).click(function () {
            console.log(carrito.indexOf(producto));
            carrito.splice(carrito.indexOf(producto),1);
            console.log(carrito);
            $(`#removeCarrito${producto.id}`).fadeOut(500,()=>{
                $(`#removeCarrito${producto.id}`).remove()
            })
        });
}
