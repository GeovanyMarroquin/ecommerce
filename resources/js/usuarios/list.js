import {obtenerUsuarios} from "./user-service.js";
import {Grid, html} from "gridjs";

const columnsUsersAll = [
    {name: "Id"},
    {name: "Nombre"},
    {name: "Correo"},
    {
        name: "Acciones", formatter: (cell, row) => {
            return html(`
                <a type="button" class="btn btn-primary btn-sm" href="${row.cells[3].data}">Editar</a>
            `);
        }
    },
];

export async function init() {
    // aca es necesario agregar todos los eventos de los inputs
    // se puede modularizar en diferentes archivos
    const usuarios = await obtenerUsuarios();
    const frm = usuarios.map(x => Object.keys(x).map(y => x[y]));
    console.log({frm})
    console.log({usuarios})
    new Grid({
        //columns: ["Id", "Name", "Email", "last updated"],
        columns: columnsUsersAll,
        data: frm
    }).render(document.getElementById("tableAllUsers"));

}
