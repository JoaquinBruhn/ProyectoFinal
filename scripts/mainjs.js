const inventario = []

class ropa{
    constructor(tipo,talle,color,patron,precio){
        this.tipo = tipo;
        this.talle = talle;
        this.color = color;
        this.patron = patron;
        this.precio = precio;
    }
    visualizar(){
        console.log(this);
    }
}

inventario.push(new ropa("pantalon", "S", "negro","ninguno", "$900"))
inventario.push(new ropa("camisa", "M", "blanca y celeste", "rallada", "$800"))
inventario.push(new ropa("zapatos","40","negro","ninguno","$1400"))
inventario.push(new ropa("remera","S","naranja","ninguno","$550"))
inventario.push(new ropa("buzo","L","marron","dibujo","$1200"))


function agregarAlCarrito(){
    let carrito = []
    for (let index = 0; index < inventario.length; index++) {
        let agregarItem=prompt("desea agregar "+inventario[index].tipo+" al carrito? si|no")
        if (agregarItem=="si"){
            carrito.push(inventario[index])
        }
    }
    return carrito
}
const carritoDeCompras = agregarAlCarrito()

alert("estos son los items de tu carrito")

for (const ropa of carritoDeCompras) {
    alert("Item: "+ropa.tipo + "\n" +"talle: "+ ropa.talle+ "\n" +"color: "+ropa.color+ "\n" +"patron: "+ropa.patron+ "\n" +"precio: "+ropa.precio)
}