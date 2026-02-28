// la Capa de Servicio debería encargarse de verificar que el ID no exista antes de proceder para asegurar la integridad de los datos.

import TareaRepository from '../repository/tareaRepository.mjs';
import Tarea from '../models/tarea.mjs';

const tareaRepo = new TareaRepository();

// La capa de servicio contiene la lógica de negocio (validaciones, filtros, decisiones).
// Actúa como intermediaria: recibe del controlador y delega la persistencia al repositorio.

export function listarTareas() {
    // Simplemente obtiene y devuelve la lista completa desde el repositorio.
    return tareaRepo.obtenerTodas();
}

export function listarTareasCompletadas() {
    // Obtiene todas y aplica un filtro de lógica de negocio para devolver solo las completadas.
    const tareas = tareaRepo.obtenerTodas();
    return tareas.filter(tarea => tarea.completado);
}

export function crearTarea(id, titulo, descripcion, completado = false) {
    const tareas = tareaRepo.obtenerTodas();
    const nuevaTarea = new Tarea(id, titulo, descripcion, completado);
    
    nuevaTarea.validar(); // Regla de negocio: validar que tenga título
    
    tareas.push(nuevaTarea);
    tareaRepo.guardar(tareas); // Persiste los cambios
}

export function completarTarea(id) {
    const tareas = tareaRepo.obtenerTodas();
    const tarea = tareas.find(tarea => tarea.id === id);
    
    if (tarea) {
        tarea.completar(); // Lógica del modelo
        tareaRepo.guardar(tareas);
    }
}

export function eliminarTarea(id) {
    let tareas = tareaRepo.obtenerTodas();
    // Filtra la lista para remover el recurso por su identificador.
    tareas = tareas.filter(tarea => tarea.id !== id);
    tareaRepo.guardar(tareas);
}