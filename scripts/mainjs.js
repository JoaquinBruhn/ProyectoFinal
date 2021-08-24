//Creacion del array con todos los items que podes elegir
const inventario = []
// constructor para maquetar los items del inventario
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
// items que van a pasar a formar parte del inventario
inventario.push(new ropa("pantalon", "S", "negro","ninguno", 900))
inventario.push(new ropa("camisa", "M", "blanca y celeste", "rallada", 800))
inventario.push(new ropa("zapatos","40","negro","ninguno",1400))
inventario.push(new ropa("remera","S","naranja","ninguno",550))
inventario.push(new ropa("buzo","L","marron","dibujo",1200))

//funcion para que el usuario elija los items que quiere agregar al carrito
function agregarAlCarrito(){
    let carrito = []
    for (let index = 0; index < inventario.length; index++) {
        let agregarItem=prompt("desea agregar "+inventario[index].tipo+" al carrito? si | no")
        if (agregarItem.toLowerCase()=="si"){
            carrito.push(inventario[index])
        }
    }
    return carrito
}
//ejecucion de la funcion
const carritoDeCompras = agregarAlCarrito()
//prompt para dar la opcion de como sortear el array del carrito de compras en base al precio con las formulas abajo
let orden = prompt("Quiere ver primero los items de mayor o menor precio? mayor | menor | vacio para no sortear")

if (orden.toLowerCase() == "mayor"){
    carritoDeCompras.sort((a,b) => {
        return b.precio - a.precio;
    });
}
else if (orden.toLowerCase() == "menor"){
    carritoDeCompras.sort((a,b) => {
        return a.precio - b.precio;
    });
}
//output de los items a travez de un prompt uno por uno
alert("estos son los items de tu carrito")

for (const ropa of carritoDeCompras) {
    alert("Item: "+ropa.tipo + "\n" +"talle: "+ ropa.talle+ "\n" +"color: "+ropa.color+ "\n" +"patron: "+ropa.patron+ "\n" +"precio: $"+ropa.precio)
}
//output de los items en lista
for(const ropa of carritoDeCompras){
    let item = document.createElement("li");
    item.innerHTML = `<h3>producto: ${ropa.tipo}</h3
                        <p>talle: ${ropa.talle}</p>
                        <p>color: ${ropa.color}</p>
                        <p>patron: ${ropa.patron}</p>
                        <p>precio: ${ropa.precio}</p>
    `
    const idUl = document.getElementById("carrito");
    idUl.appendChild(item)
}