let pasword = prompt("Ingresar contraseña: (es 1234)")
let intentos = 1

while (pasword != 1234){
    switch (pasword){
        case "123":
            alert("casi papu, metele uno mas");
            break;
        default :
            alert("contraseña incorrecta, intente de nuevo");
            break
    }
    intentos=1+intentos;
    if (intentos == 4){
        alert("numero de intentos superados");
        break;
    }
    pasword = prompt("Ingresar contraseña: ");
}

if (pasword == 1234){
    alert("Bienvenido")
}
else {
    alert("Ingrese a su mail para recuperar su contraseña")
}