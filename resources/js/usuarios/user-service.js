// aca iran todas las peticiones de usuarios
const configAxios = {
    responseType: "json",
    headers: {
        'Content-Type': 'application/json',
        "X-CSRF-TOKEN": document.querySelector("meta[name='csrf-token']").getAttribute("content"),
        'X-Requested-With': 'XMLHttpRequest'
    },
}

export const obtenerUsuarios = async () => {
    const resp = axios.get('/admin/users/listAllUsers', configAxios);
    const {data} = await resp;
    return data;
}

export const guardarNuevoUsuario = async (data) => {
    const response = await axios.post('/admin/users/store', data, {...configAxios});
    return response.data;
}

export const obtenerUsuarioPorId = async (id) => {
    const route = "/admin/users/edit/" + id;
    console.log({route})
    const resp = axios.get(route, configAxios);
    const {data} = await resp;
    return data;
}