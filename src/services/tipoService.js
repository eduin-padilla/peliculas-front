import { axiosInstance }  from "../helper/axiosConfig";

const getTipo = () => {
    return axiosInstance.get('moduloTipo', {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

const createTipo = (data) => {
    return axiosInstance.post('moduloTipo', data, {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

const updateTipo = (moduloTipoId, data) => {
    return axiosInstance.put(`moduloTipo/${moduloTipoId}`, data, {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

const deleteTipo = (id) => {
    return axiosInstance.delete('moduloTipo/'+id, {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

export {
    getTipo,
    createTipo,
    updateTipo,
    deleteTipo
}