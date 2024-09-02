function procesarSuscripcion(edad, tipoPlan, numeroCuotas) {
  
    if (edad < 18) {
        console.log("Lo sentimos :c , no puedes suscribirte al gimnasio porque eres menor de edad.");
        return;
    }

    const costoMensual = 30;
    const costoTrimestral = 80;
    const costoAnual = 300;
    let costoTotal = 0;

    if (tipoPlan === "mensual") {
        costoTotal = costoMensual;
        numeroCuotas = 1;
    } else if (tipoPlan === "trimestral") {
        costoTotal = costoTrimestral;
        numeroCuotas = 3;
    } else if (tipoPlan === "anual") {
        costoTotal = costoAnual;
        numeroCuotas = 12;
    } else {
        console.log("Tipo de plan no válido. Por favor, ingrese 'mensual', 'trimestral' o 'anual'.");
        return;
    }
    console.log(`Resumen de la suscripción:`);
    console.log(`Tipo de plan: ${tipoPlan}`);
    if (numeroCuotas > 1) {
        console.log(`Número de cuotas: ${numeroCuotas}`);
    }
    console.log(`Costo total: $${costoTotal}`);
}
