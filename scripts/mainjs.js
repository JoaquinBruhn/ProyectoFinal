class ropa{
    constructor(tipo,talle,color,patron,precio){
        this.tipo = tipo;
        this.talle = talle;
        this.color = color;
        this.patron = patron;
        this.precio = precio;
    }
    caracteristicas(){
        return ("tipo de prenda: "+this.tipo+" \n"+"talle: "+this.talle+" \n"+"color/es: "+this.color+" \n"+"patron: "+this.patron+" \n"+"precio: "+this.precio)
    }

}

const ropa1 = new ropa("pantalon", "S", "negro","ninguno", "$900");
const ropa2 = new ropa("camisa", "M", "blanca y celeste", "rallada", "$800");
const ropa3 = new ropa("zapatos","40","negro","ninguno","$1400");
const ropa4 = new ropa("remera","S","naranja","ninguno","$550");
const ropa5 = new ropa("buzo","L","marron","dibujo","$1200");

let continuar
alert("bienvenido")
let prenda = prompt("por favor elija cual de nuestras mejores prendas quiere ver.(pantalon,camisa,zapatos,remera o buzo)")
prenda = prenda.toLowerCase()
if(prenda=="pantalon"){
    alert(ropa1.caracteristicas());
}
else if(prenda=="camisa"){
    alert(ropa2.caracteristicas());
}
else if(prenda=="zapatos"){
    alert(ropa3.caracteristicas());
}
else if(prenda=="remera"){
    alert(ropa4.caracteristicas());
}
else if(prenda=="buzo"){
    alert(ropa5.caracteristicas());
}
else{
    alert("error")
}