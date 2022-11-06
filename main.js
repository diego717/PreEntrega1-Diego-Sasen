alert("Por favor seleccione Hotel disponible.");

let noches;
let hotel;
let costo;
let valor;

valor = prompt(
    "1-Hotel Lago $1200 por noche \n2-Hotel Radisson  $2000 por noche\n3-Hotel Enjoy $2200 por noche\n4-Hotel Colonia $1600 por noche"
);
switch (valor) {
    case "1":
        alert("Usted eligió Hotel Lago");
        hotel = "Hotel Lago";
        noches = prompt("¿Cuantos dias desea hospedarse?");
        costo = 1200 * noches;
        break;
    case "2":
        alert("Usted eligió Hotel Radisson");
        hotel = "Hotel Radisson";
        noches = prompt("¿Cuantos dias desea hospedarse?");
        costo = 2000 * noches;
        break;
    case "3":
        alert("Usted eligió Hotel Enjoy");
        hotel = "Hotel Enjoy";
        noches = prompt("¿Cuantos dias desea hospedarse?");
        costo = 2200 * noches;
        break;
    case "4":
        alert("Usted eligió Hotel Colonia");
        hotel = "Hotel Colonia";
        noches = prompt("¿Cuantos dias desea hospedarse?");
        costo = 1600 * noches;
        break;
    default:
        alert("Ha ingresado un valor incorrecto, por favor seleccione otra opción");
        break;
}

while (valor == false || valor > 4 || valor < 1);

function compra(hotel, noches) {
    alert(
        "Usted abono por " +
        noches +
        " dias en el  " +
        hotel +
        " teniendo un costo de $" +
        costo +
        " Pesos Uruguayos"
    );
}
compra(hotel, noches);
