//Creacion del array con todos los items que podes elegir
const accesorios = []
const sets = []
const extras = []
const carrito = []

//Este array no tiene un uso, esta por las dudas po si se necesita uno con todos los productos
const inventario = []


// constructor para maquetar los items de la seccion de accesorios
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
accesorios.push(new accesorio("Collar Vendetta", "dorado","../assets/images/muestraAccesorios/collar.jpeg", 900))
accesorios.push(new accesorio("Collar Audaz", "dorado","../assets/images/muestraAccesorios/accesorio.jpg", 800))

// constructor para maquetar los items de la seccion de sets
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
sets.push(new set("Golden","../assets/images/muestraSets/set1.jpg", 5000))
sets.push(new set("Cuatro Botones Black","../assets/images/muestraSets/set2.jpg", 6000))
sets.push(new set("Basic","../assets/images/muestraSets/set3.jpg", 5500))
sets.push(new set("Blue Love","../assets/images/muestraSets/set4.jpg", 5000))
sets.push(new set("Cuatro Botones Blue","../assets/images/muestraSets/set5,5.jpg", 6000))

// constructor para maquetar los items de la seccion de otros items sin categoria
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
extras.push(new extra("Blusa", "blanco","../assets/images/muestraSale/imagenesMuestra/Blusa.jpg", 2300))
extras.push(new extra("Blusa Rose Negra", "negro","../assets/images/muestraSale/imagenesMuestra/Blusa Rose negra.png", 2100))
extras.push(new extra("Remeron", "blanco","../assets/images/muestraSale/imagenesMuestra/Remeron.jpeg", 1800))
extras.push(new extra("Top", "negro","../assets/images/muestraSale/imagenesMuestra/Top.jpeg", 1700))


//Los Arrays se meten en inventario 
inventario.push(accesorios)
inventario.push(sets)
inventario.push(extras)

