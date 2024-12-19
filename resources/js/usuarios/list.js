import TableComponent from "../utils/table-component.js";
import {
    obtenerUsuarios,
    guardarNuevoUsuario,
    obtenerUsuarioPorId,
    actualizarUsuario,
    destroyUsuario
} from "./user-service.js";
import {html} from "gridjs";
import {Modal} from "bootstrap";
import AlertManager from "../utils/AlertManager.js";

const columnsUsersAll = [
    {id: "id", name: "Id"},
    {id: "name", name: "Nombre Completo"},
    {id: "email", name: "Correo"},
    {
        name: "Acciones",
        formatter: (cell, row) => {
            return html(`
                <a type="button" class="btn btn-warning editUser"
                    data-dbid="${row.cells[0].data}"
                    data-href="${row.cells[3].data}">
                    <i class="bi bi-pencil"></i>
                    Editar
                </a>
                <a type="button" class="btn btn-danger deleteUser"
                    data-dbid="${row.cells[0].data}">
                    <i class="bi bi-trash3"></i>
                    Eliminar
                </a>
            `);
        },
    },
];


// Elements
const tableUsersInstance = new TableComponent("tableAllUsers", columnsUsersAll);
const btnAddUser = document.querySelector("#btnAddUser");
const btnAggNewUser = document.querySelector("#btnAggNewUser");
const modalUser = new Modal('#modalAggNewUser', {keyboard: false});
const inputUserId = document.querySelector("#userId");
const inputFullName = document.querySelector("#fullName");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");

export async function init() {
    // aca es necesario agregar todos los eventos de los inputs
    // se puede modularizar en diferentes archivos
    AlertManager.loading();
    const users = await obtenerUsuarios();
    AlertManager.closeLoading();
    const frm = users.map(x => Object.keys(x).map(y => x[y]));
    tableUsersInstance.setData(frm);
    tableUsersInstance.init();

    // Evento de click en tabla
    tableUsersInstance.addRowEvent("click", (e, row) => {
        console.log({e, row})
        if (e.target.classList.contains("editUser")) {
            const dbId = e.target.getAttribute("data-dbid");
            inputUserId.value = dbId;
            editarUsuario(dbId);
        }
        if (e.target.classList.contains("deleteUser")) {
            const dbId = e.target.getAttribute("data-dbid");
            eliminarUsuario(dbId);
        }
    });

    btnAddUser.addEventListener("click", () => {
        addNewUser();
    });

    btnAggNewUser.addEventListener("click", () => {
        saveOrUpdateUser();
    })
}

const editarUsuario = async (id) => {
    AlertManager.loading();
    const user = await obtenerUsuarioPorId(id);
    AlertManager.closeLoading();
    inputFullName.value = user.name;
    inputEmail.value = user.email;
    inputPassword.value = "";
    inputEmail.setAttribute("disabled", "disabled");
    modalUser.show();
}

const addNewUser = () => {
    inputEmail.removeAttribute("disabled");
    modalUser.show();
}

const saveOrUpdateUser = async () => {
    if (!validateFormUser()) {
        AlertManager.warning("Ingrese los datos obligatorios");
        return;
    }
    const fullName = inputFullName.value;
    const email = inputEmail.value;
    const password = inputPassword.value;

    const requestData = {
        fullName,
        email,
        password,
    };
    let data;
    AlertManager.loading();

    if (!!inputUserId.value) {
        requestData.dbId = inputUserId.value;
        const r = await actualizarUsuario(requestData);
        data = r.data;
    } else {
        const r = await guardarNuevoUsuario(requestData);
        data = r.data;
    }

    AlertManager.closeLoading();

    tableUsersInstance.setData(data);
    tableUsersInstance.update();

    AlertManager.success("Usuario agregado correctamente");
    modalUser.hide();

    inputFullName.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
    inputUserId.value = "";
}

const validateFormUser = () => {
    const fullName = !!inputFullName.value;
    const email = !!inputEmail.value;
    const password = !!inputPassword.value;
    const userId = !!inputUserId.value;

    return userId
        ? fullName && email
        : fullName && email && password;
}

const eliminarUsuario = async (id) => {

    const {value} = await AlertManager.question("Estas seguro?", "Esta accion no se podra revertir");

    if(!value) return false;

    AlertManager.loading();
    const resp = await destroyUsuario(id);
    AlertManager.closeLoading();

    const data = resp.data;

    tableUsersInstance.setData(data);
    tableUsersInstance.update();
}

