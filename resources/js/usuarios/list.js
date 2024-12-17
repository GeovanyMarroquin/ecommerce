import TableComponent from "../utils/table-component.js";
import {obtenerUsuarios} from "./user-service.js";
import {html} from "gridjs";
import {Modal} from "bootstrap";

const columnsUsersAll = [
    {id: "id", name: "Id"},
    {id: "name", name: "Nombre Completo"},
    {id: "email", name: "Correo"},
    {
        name: "Acciones",
        formatter: (cell, row) => {
            return html(`
                <a type="button" class="btn btn-warning editUser" data-href="${row.cells[3].data}">
                    <i class="bi bi-pencil"></i>
                    Editar
                </a>
            `);
        },
    },
];


const btnAddUser = document.querySelector("#btnAddUser");

export async function init() {
    // aca es necesario agregar todos los eventos de los inputs
    // se puede modularizar en diferentes archivos
    const users = await obtenerUsuarios();
    const frm = users.map(x => Object.keys(x).map(y => x[y]));

    const tableUsersInstance = new TableComponent("tableAllUsers", columnsUsersAll, frm);

    // Manejo de eventos para los botones
    tableUsersInstance.getTableElement().addEventListener("click", (event) => {
        if (event.target.classList.contains("editUser")) {
            const route = event.target.getAttribute("data-href");
            editarUsuario(route);
        }
    });

    btnAddUser.addEventListener("click", () => {
        addNewUser();
    });
}

const editarUsuario = (route) => {

}

const addNewUser = () => {
    const modal = new Modal('#modalAggNewUser', {
        keyboard: false
    });
    modal.show();
}