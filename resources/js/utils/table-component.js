import {Grid} from "gridjs";


class TableComponent {
    columns = [];
    data = [];
    gridElement;
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

    constructor(tableId, columns) {
        this.columns = columns;
        this.tableElement = document.getElementById(tableId);
    }

    setData(data) {
        this.data = data;
    }


    init() {
        this.gridElement = new Grid({
            ...this.default,
            columns: this.columns,
            data: this.data,
        });
        this.gridElement.render(this.tableElement);

        return this.gridElement;
    }

    update() {
        this.gridElement = this.gridElement.updateConfig({
            ...this.default,
            columns: this.columns,
            data: this.data,
        });
        this.gridElement.forceRender();

        return this.gridElement;
    }

    getTableElement() {
        return this.tableElement;
    }

    addRowEvent(event, handler) {
        if (!this.tableElement) {
            throw new Error("Table element is not initialized.");
        }

        this.tableElement.addEventListener(event, (e) => {
            const row = e.target.closest("tr");
            if (row) {
                handler(e, row);
            }
        });
    }
}

export default TableComponent;
