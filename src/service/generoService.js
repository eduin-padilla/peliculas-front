import { axiosInstance }  from "../helper/axiosConfig";

const getGenero = () => {
    return axiosInstance.get('moduloGenero', {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

const createGenero = (data) => {
    return axiosInstance.post('moduloGenero', data, {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

const updateGenero = (moduloGeneroId, data) => {
    return axiosInstance.put(`moduloGenero/${moduloGeneroId}`, data, {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

const deleteGenero = (id) => {
    return axiosInstance.delete('moduloGenero/'+id, {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

export {
    getGenero,
    createGenero,
    updateGenero,
    deleteGenero
}