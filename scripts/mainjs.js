AOS.init();

//Creacion del array con todos los items que podes elegir
const inventario = []
// constructor para maquetar los items del inventario
class ropa{
    constructor(nombre,talle,color,imgSrc,precio){
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
        this.imgSrc = imgSrc;
        this.precio = precio;
    }
    visualizar(){
        console.log(this);
    }
}
// items que van a pasar a formar parte del inventario
inventario.push(new ropa("Collar Vendetta", "-", "negro","../assets/images/muestraAccesorios/imagenChica3.jpg", 900))
inventario.push(new ropa("Collar Audaz", "-", "blanca y celeste","../assets/images/muestraAccesorios/imagenChica4.jpg", 800))
inventario.push(new ropa("Pantalon Basic","40","negro","../assets/images/muestraHits/Hit2.jpeg",1400))
inventario.push(new ropa("Blazer Exedra","S","naranja","../assets/images/muestraHits/Hit1.jpeg",550))
inventario.push(new ropa("Pantalon de Gabardina","L","marron","../assets/images/muestraHits/Hit2.jpeg",1200))


let productos = document.getElementById(`productos`)

let item = ``
let i
showInventory()

function showInventory(){
    for (i=0;i<inventario.length;i++){

        let column = document.createElement(`div`);
        column.className = "col-md-6 col-xs-12 d-flex justify-content-center";

            let nombreProducto = document.createElement(`h4`);
            nombreProducto.className = `article__paragraph__fuente`;
            nombreProducto.innerHTML = `${inventario[i].nombre}`;

            let figure = document.createElement(`figure`)
            figure.className = "figure figure__size__espacio"

                let imagen = document.createElement(`img`);
                imagen.className = `figure-img img-fluid rounded`;
                imagen.src = `${inventario[i].imgSrc}`;

                let figurePrecio = document.createElement(`figcaption`)
                figurePrecio.className = `figure-caption text-right figure__CaptionBackground__color figure__figCaption__fuentes`
                figurePrecio.innerHTML = `$ ${inventario[i].precio}`
                
                let figureTalle = document.createElement(`li`)
                figureTalle.className = `article__paragraph__fuente`
                figureTalle.innerHTML = `talle ${inventario[i].talle}`

                let agregarCarritoBtn = document.createElement(`button`)
                agregarCarritoBtn.className = `btn btn-outline-light`
                agregarCarritoBtn.idName = `${i}`
                agregarCarritoBtn.addEventListener(`click`,() =>{
                    productoId = parseInt(agregarCarritoBtn.idName)
                    agregarCarrito()
                })
                    let btnText = document.createElement(`h6`)
                    btnText.className = `footer__links__fuente`
                    btnText.innerHTML = `Agregar al carrito`

                    agregarCarritoBtn.appendChild(btnText)

                figure.appendChild(imagen)
                figure.appendChild(figurePrecio)
                figure.appendChild(figureTalle)
                figure.appendChild(agregarCarritoBtn)
            
            column.appendChild(nombreProducto)
            column.appendChild(figure)
        
        productos.appendChild(column)

    }
}

let carrito = document.getElementById(`carrito`)

function agregarCarrito(){
    item += `
        <div class="col-lg-3 article__title__color">
            <ul>
                <li class="footer__links__fuente">producto: ${inventario[productoId].nombre}</li>
                <li>
                    <figure style="width: 15%; height: 15%;">
                        <img class="figure-img img-fluid rounded" src="${inventario[productoId].imgSrc}">
                    </figure>
                </li>
                <li class="footer__links__fuente">talle: ${inventario[productoId].talle}</li>
                <li class="footer__links__fuente">color: ${inventario[productoId].color}</li>
                <li class="footer__links__fuente">precio: $ ${inventario[productoId].precio}</li>
            </ul>
        </div>
    `


    carrito.innerHTML = item;
}

// for(const ropa of carritoDeCompras){
//     let item = document.createElement("li");
//     item.innerHTML = `<h3>producto: ${ropa.nombre}</h3
//                         <p>talle: ${ropa.talle}</p>
//                         <p>color: ${ropa.color}</p>
//                         <img class="height": ${ropa.imgSrc}>
//                         <p>precio: ${ropa.precio}</p>
//     `
//     const idUl = document.getElementById("inventario");
//     idUl.appendChild(item)
// }