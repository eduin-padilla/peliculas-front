import { axiosInstance }  from "../helper/axiosConfig";

const getTipo = () => {
    return axiosInstance.get('moduloTipo', {
        header: {
                'Content-Type': 'application/json',
            }
        });
}

const createTipo = (data) => {
    return axiosInstance.post('moduloTipo', data, {
        header: {
                'Content-Type': 'application/json',
            }
        });
}

const updateTipo = (moduloTipoId, data) => {
    return axiosInstance.put(`moduloTipo/${moduloTipoId}`, data, {
        header: {
                'Content-Type': 'application/json',
            }
        });
}

const deleteTipo = (id) => {
    return axiosInstance.delete('moduloTipo/'+id, {
        header: {
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