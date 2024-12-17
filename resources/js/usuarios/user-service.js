// aca iran todas las peticiones de usuarios


export const obtenerUsuarios = () => {
    return fetch('/admin/users/listAllUsers ', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json());
}
