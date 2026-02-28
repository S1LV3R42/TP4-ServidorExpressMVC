// La clase Tarea es el modelo que encapsula los atributos de una tarea y sus métodos para interactuar con ellos.
// Sigue el Principio de Responsabilidad Única (SRP) al enfocarse únicamente en la representación y manipulación de los datos.
export default class Tarea {
    constructor (id, titulo, descripcion, completado = false) {
        this.id = id; // Identificador único de la tarea
        this.titulo = titulo; // Título de la tarea (obligatorio)
        this.descripcion = descripcion; // Descripción de la tarea
        this.completado = completado; // Estado booleano de completado, por defecto es false
    }

    // Método para marcar una tarea como completada. Cambia el estado a true.
    completar() {
        this.completado = true;
    }

    // Método para validar que el titulo de la tarea no esté vacio.
    // Asegura que los datos sean consistentes antes de ser procesados o guardados.
    validar() {
        if (!this.titulo || this.titulo.trim() === '') {
            throw new Error('El titulo de la tarea es obligatorio.');
        }
    }
}