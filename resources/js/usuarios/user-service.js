// Ejemplo de uso
// const apiClient = new ApiClient('https://api.example.com', { Authorization: 'Bearer token' });
// apiClient.get('/endpoint').then(console.log).catch(console.error);

import ApiClient from "../utils/http.js";

const HOST = 'http://localhost:8000';
const apiClient = new ApiClient(HOST, {
    "X-CSRF-TOKEN": document.querySelector("meta[name='csrf-token']").getAttribute("content"),
});

export const obtenerUsuarios = async () => {
    return await apiClient.get("/admin/users/listAllUsers");
}

export const guardarNuevoUsuario = async (data) => {
    return await apiClient.post('/admin/users/store', data);
}

export const obtenerUsuarioPorId = async (id) => {
    const route = "/admin/users/edit/" + id;
    const resp = axios.get(route);
    const {data} = await resp;
    return data;
}

export const actualizarUsuario = async (data) => {
    const url = "/admin/users/update/" + data.dbId;
    return await apiClient.put(url, data);
}

export const destroyUsuario = async (id) => {
    const url = "/admin/users/destroy/" + id;
    return await apiClient.delete(url);
}
