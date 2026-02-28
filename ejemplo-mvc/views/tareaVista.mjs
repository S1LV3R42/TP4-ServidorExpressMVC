// La capa de vista es responsable de la presentación de los datos, formateándolos en JSON para el cliente.
// Esto garantiza que los datos se presenten de manera consistente y clara.

// Función para renderizar una lista de tareas en formato JSON con indentación de 2 espacios.
export function renderizarListaTareas (tareas) {
    return JSON.stringify(tareas, null, 2);
}

// Función para renderizar un mensaje genérico (éxito, error o notificación) en formato JSON.
export function renderizarMensaje (mensaje) {
    return JSON.stringify({ mensaje }, null, 2);
}

// Función para renderizar una tarea específica, útil al solicitar por ID o tras una actualización.
export function renderizarTarea (tarea) {
    return JSON.stringify(tarea, null, 2);
}