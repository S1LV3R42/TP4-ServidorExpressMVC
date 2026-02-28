import fs from 'fs'; // Módulo del sistema de archivos de Node.js
import path from 'path'; // Módulo para manejar rutas de archivos
import { fileURLToPath } from 'url';
import TareasDataSource from './TareasDataSource.mjs';
import Tarea from '../models/tarea.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../tareas.txt');

// Implementación concreta que maneja la persistencia usando archivos de texto.
export default class TareaRepository extends TareasDataSource {
    constructor() {
        super();
    }

    // Lee el archivo, deserializa el JSON y reconstruye las instancias de la clase Tarea
    // para que tengan acceso a sus métodos (completar, validar).
    obtenerTodas() {
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            const tareas = JSON.parse(data);
            return tareas.map(tareaData => new Tarea(
                tareaData.id,
                tareaData.titulo,
                tareaData.descripcion,
                tareaData.completado
            ));
        } catch (error) {
            console.error('Error al leer el archivo de tareas:', error);
            return [];
        }
    }

    // Convierte el array de tareas a cadena JSON y lo escribe en el archivo físico.
    guardar(tareas) {
        try {
            const data = JSON.stringify(tareas, null, 2);
            fs.writeFileSync(filePath, data, 'utf-8');
        } catch (error) {
            console.error('Error al guardar las tareas:', error);
        }
    }

    // Filtra la lista para excluir el ID proporcionado y guarda el resultado.
    eliminar(id) {
        try {
            const tareas = this.obtenerTodas();
            const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
            this.guardar(tareasActualizadas);
        } catch (error) {
            console.error('Error al eliminar la tarea:', error);
        }
    }
}