import { axiosInstance }  from "../helper/axiosConfig";

const getGenero = () => {
    return axiosInstance.get('moduloGenero', {
        header: {
        'Content-Type': 'application/json',
            }
        });
}

const createGenero = ( data ) => {
    return axiosInstance.post('moduloGenero', data, {
        header: {
                'Content-Type': 'application/json',
            }
        });
}

const updateGenero = ( moduloGeneroId, data ) => {
    return axiosInstance.put(`moduloGenero/${moduloGeneroId}`, data, {
        header: {
                'Content-Type': 'application/json',
            }
        });
}

const deleteGenero = ( id ) => {
    return axiosInstance.delete('moduloGenero/'+id, {
        header: {
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