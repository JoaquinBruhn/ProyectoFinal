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

inventario.push(new ropa("pantalon", "S", "negro","ninguno", 900))
inventario.push(new ropa("camisa", "M", "blanca y celeste", "rallada", 800))
inventario.push(new ropa("zapatos","40","negro","ninguno",1400))
inventario.push(new ropa("remera","S","naranja","ninguno",550))
inventario.push(new ropa("buzo","L","marron","dibujo",1200))


function agregarAlCarrito(){
    let carrito = []
    for (let index = 0; index < inventario.length; index++) {
        let agregarItem=prompt("desea agregar "+inventario[index].tipo+" al carrito? si | no")
        if (agregarItem=="si"){
            carrito.push(inventario[index])
        }
    }
    return carrito
}
const carritoDeCompras = agregarAlCarrito()

let orden = prompt("Quiere ver primero los items de mayor o menor precio? mayor | menor | vacio para no sortear")

if (orden == "mayor"){
    carritoDeCompras.sort((a,b) => {
        return b.precio - a.precio;
    });
}
else if (orden == "menor"){
    carritoDeCompras.sort((a,b) => {
        return a.precio - b.precio;
    });
}

alert("estos son los items de tu carrito")

for (const ropa of carritoDeCompras) {
    alert("Item: "+ropa.tipo + "\n" +"talle: "+ ropa.talle+ "\n" +"color: "+ropa.color+ "\n" +"patron: "+ropa.patron+ "\n" +"precio: $"+ropa.precio)
}

for(const ropa of carritoDeCompras){
    let item = document.createElement("li");
    item.innerHTML = "producto: "+ropa.tipo + "\n" +"talle: "+ ropa.talle+ "\n" +"color: "+ropa.color+ "\n" +"patron: "+ropa.patron+ "\n" +"precio: $"+ropa.precio;
    const idUl = document.getElementById("carrito");
    idUl.appendChild(item)
}