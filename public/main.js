// Esperamos a que todo el HTML cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    
    // Obtenemos el botón de comunidad y su menú desplegable
    const btnComunidad = document.getElementById('btn-comunidad');
    const menuComunidad = document.getElementById('menu-comunidad');

    // Escuchamos el clic en el enlace "COMUNIDAD"
    btnComunidad.addEventListener('click', (evento) => {
        // Evitamos que el enlace nos lleve arriba de la página por tener href="#"
        evento.preventDefault(); 
        
        // Intercambiamos la clase 'mostrar-menu' para abrir/cerrar
        menuComunidad.classList.toggle('mostrar-menu');
    });

    // Pequeño truco para cerrar el menú si hacemos clic fuera de él
    document.addEventListener('click', (evento) => {
        // Si el clic no fue dentro de la sección dropdown, lo ocultamos
        if (!evento.target.closest('.dropdown')) {
            menuComunidad.classList.remove('mostrar-menu');
        }
    });

});