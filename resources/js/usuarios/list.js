import TableComponent from "../utils/table-component.js";
import {obtenerUsuarios, guardarNuevoUsuario, obtenerUsuarioPorId} from "./user-service.js";
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
                <a type="button" class="btn btn-warning editUser" 
                    data-dbid="${row.cells[0].data}"
                    data-href="${row.cells[3].data}">
                    <i class="bi bi-pencil"></i>
                    Editar
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
    const users = await obtenerUsuarios();
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
    });

    btnAddUser.addEventListener("click", () => {
        addNewUser();
    });

    btnAggNewUser.addEventListener("click", () => {
        saveNewUser();
    })
}

const editarUsuario = async (id) => {
    const user = await obtenerUsuarioPorId(id);
    inputFullName.value = user.name;
    inputEmail.value = user.email;
    inputPassword.value = user.password;
    modalUser.show();
}

const addNewUser = () => {
    modalUser.show();
}

const saveNewUser = async () => {
    const fullName = inputFullName.value;
    const email = inputEmail.value;
    const password = inputPassword.value;

    if (!(fullName && email && password)) {
        alert("Ingrese los datos obligatorios");
        return;
    }

    const data = {
        fullName,
        email,
        password,
    }

    const response = await guardarNuevoUsuario(data);

    tableUsersInstance.setData(response.data);
    tableUsersInstance.update();

    alert(response.message);
    modalUser.hide();
}

const editUser = async () => {
    const fullName = document.querySelector("#fullName").value || "";
    const email = document.querySelector("#email").value || "";
    const password = document.querySelector("#password").value || "";

    if (!(fullName && email && password)) {
        alert("Ingrese los datos obligatorios");
        return;
    }

    const data = {
        fullName,
        email,
        password,
    }

    const response = await guardarNuevoUsuario(data);

    tableUsersInstance.setData(response.data);
    tableUsersInstance.update();

    alert(response.message);
    modalUser.hide();
}