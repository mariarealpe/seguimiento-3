function registrarCreditos(codigoEstudiante, carrera, credito, semestre ){
const actividades = {
        "Gimnasio": 10,
        "Arte country y pintura": 5,
        "Voleibol": 8,
        "Danza": 3
    };
    if (!(actividad in actividades)) {
        console.log("Actividad deportiva no válida.");
        return;
    }

    if (actividades[actividad] <= 0) {
        console.log("Lo sentimos :c , no hay cupos disponibles para la actividad seleccionada.");
        return;
    }

    console.log(`Registro exitoso: Estudiante ${codigoEstudiante}, Carrera ${carrera}, Actividad ${actividad}, Semestre ${semestre}.`);
}