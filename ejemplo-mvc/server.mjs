import express from 'express'; // Marco minimalista para manejar rutas y solicitudes.
import {
    listarTareasController,
    listarTareasCompletadasController,
    crearTareaController,
    completarTareaController,
    eliminarTareaController
} from './controllers/tareaController.mjs';

const app = express(); // Instancia de la aplicación (punto de entrada HTTP)
const PORT = 3000;

// Middleware crucial para procesar cuerpos de solicitudes en formato JSON (POST/PUT).
app.use(express.json());

// Definición de Rutas (Enrutamiento):
// Determina qué controlador maneja cada método y ruta específica.

app.get('/tareas', listarTareasController); // Obtener todas
app.get('/tareas/completadas', listarTareasCompletadasController); // Obtener filtradas
app.post('/tareas', crearTareaController); // Crear recurso
app.put('/tareas/:id/completar', completarTareaController); // Actualizar recurso
app.delete('/tareas/:id', eliminarTareaController); // Eliminar recurso

// Inicia el servidor y comienza a escuchar peticiones en el puerto definido.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});