let reservas = [];

function verificarDisponibilidad(fecha, horaInicio, duracion) {
    let horaFin = horaInicio + duracion;

    for (let i = 0; i < reservas; i++) {
        let reserva = reservas[i];
        let reservaHoraFin = reserva.horaInicio + reserva.duracion;
        
        if (reserva.fecha === fecha && (horaInicio < reservaHoraFin && horaFin > reserva.horaInicio)) {
            return false; // Salón ocupado
        }
    }
    return true;
}