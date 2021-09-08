//Creacion del array con todos los items que podes elegir
const accesorios = []
const sets = []
const extras = []

const inventario = []
// constructor para maquetar los items
class accesorio{
    constructor(nombre,color,imgSrc,precio){
        this.nombre = nombre;
        this.color = color;
        this.imgSrc = imgSrc;
        this.precio = precio;
    }
    visualizar(){
        console.log(this);
    }
}
accesorios.push(new accesorio("Collar Vendetta", "dorado","../assets/images/muestraAccesorios/imagenChica3.jpg", 900))
accesorios.push(new accesorio("Collar Audaz", "dorado","../assets/images/muestraAccesorios/imagenChica4.jpg", 800))


class set{
    constructor(nombre,imgSrc,precio){
        this.nombre = nombre;
        this.imgSrc = imgSrc
        this.precio = precio
    }
    visualizar(){
        console.log(this);
    }
}
sets.push(new set("Golden","../assets/images/muestraAccesorios/imagenChica3.jpg", 5000))
sets.push(new set("Cuatro Botones Black","../assets/images/muestraAccesorios/imagenChica4.jpg", 6000))
sets.push(new set("Basic","../assets/images/muestraAccesorios/imagenChica3.jpg", 5500))
sets.push(new set("Blue Love","../assets/images/muestraAccesorios/imagenChica4.jpg", 5000))
sets.push(new set("Cuatro Botones Blue","../assets/images/muestraAccesorios/imagenChica3.jpg", 6000))


class extra{
    constructor(nombre,color,imgSrc,precio){
        this.nombre = nombre;
        this.color = color;
        this.imgSrc = imgSrc;
        this.precio = precio;
    }
    visualizar(){
        console.log(this);
    }
}
extras.push(new extra("Blusa", "dorado","../assets/images/muestraAccesorios/imagenChica3.jpg", 2300))
extras.push(new extra("Blusa Rose Negra", "dorado","../assets/images/muestraAccesorios/imagenChica4.jpg", 2100))
extras.push(new extra("Remeron", "dorado","../assets/images/muestraAccesorios/imagenChica3.jpg", 1800))
extras.push(new extra("Top", "dorado","../assets/images/muestraAccesorios/imagenChica4.jpg", 1700))

inventario.push(accesorios)
inventario.push(sets)
inventario.push(extras)

accesorios[0].nombre