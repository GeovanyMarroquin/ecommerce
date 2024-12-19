import Swal from "sweetalert2";

class AlertManager {
    static success(text = "Exito!", config = {}) {
        Swal.fire({
            ...config,
            text: text,
            icon: "success",
            confirmButtonText: "Aceptar",
        });
    }

    static error(text = "Error!", config = {}) {
        Swal.fire({
            ...config,
            text: text,
            icon: "error",
            confirmButtonText: "Aceptar",
        });
    }

    static warning(text = "Warning!", config = {}) {
        Swal.fire({
            ...config,
            text: text,
            icon: "warning",
            confirmButtonText: "Aceptar",
        });
    }

    static info(text = "Info!", config = {}) {
        Swal.fire({
            ...config,
            text: text,
            icon: "info",
            confirmButtonText: "Aceptar",
        });
    }

    static question(title = "pregunta", text = "seguro?") {
        return Swal.fire({
            title: title,
            text: text,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Si, Aceptar",
            cancelButtonText: "No, Cancelar",
        });
    }

    static custom(options) {
        Swal.fire({
            ...options,
        });
    }

    static loading(title = "Cargando") {
        Swal.fire({
            title: title,
            html: `
                <img src="/assets/images/loader.svg" width="90" height="90" alt=""/>
            `,
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonText: "Cancelar",
        });
    }


    static closeLoading() {
        Swal.close();
    }
}

export default AlertManager
