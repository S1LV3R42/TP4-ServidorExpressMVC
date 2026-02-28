# Sprint 1 - Trabajo Practico 4

Servidor REST construido con Node.js y Express siguiendo la arquitectura Modelo-Vista-Controlador (MVC). Expone una API de superheroes con rutas GET sobre el puerto 3005.

---

## Estructura del proyecto

```
/project-root
|-- /models
|   |-- superheroe.mjs
|-- /controllers
|   |-- superheroesController.mjs
|-- /services
|   |-- superheroesService.mjs
|-- /repository
|   |-- superheroesDataSource.mjs
|   |-- superheroesRepository.mjs
|-- /views
|   |-- responseView.mjs
|-- server.mjs
|-- superheroes.txt
```

---

## Capas de la arquitectura

**Modelo** (`models/superheroe.mjs`)  
Define la estructura de datos de un superheroe y sus metodos de validacion.

**Vista** (`views/responseView.mjs`)  
Formatea las respuestas en JSON antes de enviarlas al cliente.

**Controlador** (`controllers/superheroesController.mjs`)  
Recibe las solicitudes HTTP, delega la logica al servicio y envia la respuesta usando la vista.

**Servicio** (`services/superheroesService.mjs`)  
Contiene la logica de negocio: buscar por ID, filtrar por atributo, filtrar mayores de 30 anos del planeta Tierra con al menos 2 poderes.

**Persistencia** (`repository/`)  
`superheroesDataSource.mjs` define la interfaz abstracta. `superheroesRepository.mjs` la implementa leyendo desde `superheroes.txt` con el modulo `fs` de Node.js.

---

## Instalacion

```bash
npm install
```

---

## Uso

```bash
node server.mjs
```

El servidor escucha en `http://localhost:3005`.

---

## Endpoints

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/superheroes/id/:id` | Devuelve el superheroe con el ID indicado, o 404 si no existe |
| GET | `/superheroes/atributo/:atributo/:valor` | Devuelve los superheroes que coincidan con el atributo y valor dados |
| GET | `/superheroes/edad/mayorA30` | Devuelve superheroes mayores de 30 anos, del planeta Tierra y con al menos 2 poderes |

---

## Datos de ejemplo

Los superheroes se almacenan en `superheroes.txt` en formato JSON. Cada objeto incluye los campos: `id`, `nombreSuperHeroe`, `nombreReal`, `nombreSociedad`, `edad`, `planetaOrigen`, `debilidad`, `poder`, `habilidadEspecial`, `aliado` y `enemigo`.
