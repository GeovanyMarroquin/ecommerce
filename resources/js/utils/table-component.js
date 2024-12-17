import { Grid } from "gridjs";


class TableComponent {
    columns = [];
    data = [];
    tableElement = document.createElement("table");
    default = {
        pagination: {
            enabled: true,
            limit: 5,
        },
        sort: true,
        search: true,
        language: {
            search: {
                placeholder: "Buscar...",
            },
            pagination: {
                previous: "Anterior",
                next: "Siguiente",
                showing: "Mostrando",
                of: "de",
                to: "a",
                results: "resultados",
            },
            noRecordsFound: "No se encontraron registros",
            error: "Error al cargar los datos",
        },
    }

    constructor(tableId, columns, data) {
        this.data = data;
        this.columns = columns;
        this.tableElement = document.getElementById(tableId);

        this.init();
    }

    init() {
        return new Grid({
            ...this.default,
            columns: this.columns,
            data: this.data,
        }).render(this.tableElement);
    }

    getTableElement() {
        return this.tableElement;
    }
}

export default TableComponent;
