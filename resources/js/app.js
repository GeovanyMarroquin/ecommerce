import './bootstrap';

import '../admin-template/vendors/perfect-scrollbar/perfect-scrollbar.min.js'

//import '../admin-template/vendors/apexcharts/apexcharts.js'
//import '../admin-template/js/pages/dashboard.js'
import '../admin-template/js/main.js';
import routes from './routes';

// Carga dinamica de archivos necesarios
function loadRouteModule(path) {
    const modulePath = routes[path];
    if (modulePath) {
        import(modulePath)
            .then((module) => {
                if (module && typeof module.init === 'function') {
                    module.init();
                } else {
                    console.warn(`El módulo para la ruta ${path} no tiene una función 'init'`);
                }
            })
            .catch((error) => {
                console.error(`Error al cargar el módulo para la ruta ${path}:`, error);
            });
    } else {
        console.warn(`No hay ruta configurada para ${path}`);
    }
}
const uri = window.location.pathname;
console.log({uri, routes})
loadRouteModule(uri);
