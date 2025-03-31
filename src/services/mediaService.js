import { axiosInstance } from "../helper/axiosConfig";

const getMedia = () => {
    return axiosInstance.get('moduloMedia', {
        headers: { 'Content-Type': 'application/json' }
    });
};

const createMedia = (data) => {
    return axiosInstance.post('moduloMedia', data, {
        headers: { 'Content-Type': 'application/json' }
    });
};

const getMediaById = (id) => {
    return axiosInstance.get(`moduloMedia/${id}`);
};

const updateMedia = (id, data) => {
    return axiosInstance.put(`moduloMedia/${id}`, data, {
        headers: { 'Content-Type': 'application/json' }
    });
};

const deleteMedia = (id) => {
    return axiosInstance.delete(`moduloMedia/${id}`, {
        headers: { 'Content-Type': 'application/json' }
    });
};

// Exportación única de todas las funciones
export { 
    getMedia, 
    createMedia,
    getMediaById, 
    updateMedia, 
    deleteMedia 
};