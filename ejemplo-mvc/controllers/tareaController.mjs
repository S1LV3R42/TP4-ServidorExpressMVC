import { 
    listarTareas, 
    listarTareasCompletadas, 
    crearTarea, 
    completarTarea, 
    eliminarTarea 
} from '../services/tareaService.mjs';
import { renderizarListaTareas, renderizarMensaje } from '../views/tareaVista.mjs';

// El controlador es el intermediario. Recibe solicitudes HTTP, coordina con el servicio 
// y responde usando la vista. No debe contener lógica de negocio.

export function listarTareasController (req, res) {
    // Flujo: Recibe GET -> Llama servicio -> Formatea respuesta con la Vista -> Envía res.
    const tareas = listarTareas();
    res.send(renderizarListaTareas(tareas));
}

export function listarTareasCompletadasController (req, res) {
    const tareasCompletadas = listarTareasCompletadas();
    res.send(renderizarListaTareas(tareasCompletadas));
}

export function crearTareaController (req, res) {
    // Extrae datos del cuerpo de la solicitud (req.body)
    const { id, titulo, descripcion, completado } = req.body;
    crearTarea(id, titulo, descripcion, completado);
    res.send(renderizarMensaje('Tarea creada con éxito'));
}

export function completarTareaController (req, res) {
    // Usa parámetros de la URL (req.params) para identificar el recurso.
    const { id } = req.params;
    completarTarea(parseInt(id));
    res.send(renderizarMensaje('Tarea marcada como completada'));
}

export function eliminarTareaController(req, res) {
    const { id } = req.params;
    eliminarTarea(parseInt(id));
    res.send(renderizarMensaje('Tarea eliminada con éxito'));
}