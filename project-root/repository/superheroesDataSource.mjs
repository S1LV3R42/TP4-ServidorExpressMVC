export default class SuperheroesDataSource {
    // Método abstracto que debe ser implementado por cualquier subclase de persistencia.
    obtenerTodos() {
        throw new Error('Este método debe ser implementado por la subclase');
    }
}