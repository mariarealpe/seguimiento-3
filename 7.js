// Duración de cada estado en segundos
const DURACION_VERDE = 5;
const DURACION_AMARILLO = 2;
const DURACION_ROJO = 7;

function mostrarEstado(estado) {
    console.clear();
    switch (estado) {
        case 'verde':
            console.log('Verde: ¡Avance, por favor!');
            break;
        case 'amarillo':
            console.log('Amarillo: ¡Precaución!');
            break;
        case 'rojo':
            console.log(' Rojo: ¡Deténgase!');
            break;
    }
}

function cicloSemaforo() {
    mostrarEstado('verde');
    setTimeout(() => {
        mostrarEstado('amarillo');
        setTimeout(() => {
            mostrarEstado('rojo');
            setTimeout(cicloSemaforo, DURACION_ROJO);
        }, DURACION_AMARILLO);
    }, DURACION_VERDE);
}