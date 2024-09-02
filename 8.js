const origen = "Londres";
const destino = "Marruecos";
const fecha = "2024-09-15";
const hora = "18:00";
const tipoTiquete = "ida";
const nombrePasajero = "Juan Pérez";
const identificacionPasajero = "12345678";
const precioBase = 300
function calcularCosto(origen, destino, tipoTiquete) {
    let costo = precioBase;
    if (tipoTiquete === "ida y vuelta") {
        costo *= 2; 

    return costo;
}

function mostrarResumen(costo) {
    console.log("Resumen del viaje:");
    console.log(`Origen: ${origen}`);
    console.log(`Destino: ${destino}`);
    console.log(`Fecha: ${fecha}`);
    console.log(`Hora: ${hora}`);
    console.log(`Tipo de tiquete: ${tipoTiquete}`);
    console.log(`Nombre del pasajero: ${nombrePasajero}`);
    console.log(`Identificación: ${identificacionPasajero}`);
    console.log(`Correo electrónico: ${correoPasajero}`);
    console.log(`Costo del tiquete: €${costo}`);
}

function confirmarCompra() {
    const confirmacion = "s"; 

    if (confirmacion === "s") {
        console.log("Transacción exitosa.");
    } else {
        console.log("Compra cancelada.");
    }
}

const costoTiquete = calcularCosto(origen, destino, tipoTiquete);
mostrarResumen(costoTiquete);
confirmarCompra();
}