import { axiosInstance } from "../helper/axiosConfig";

const getMedia = () => {
    return axiosInstance.get('moduloMedia', {
        header: { 'Content-Type': 'application/json' }
    });
};

const createMedia = (data) => {
    return axiosInstance.post('moduloMedia', data, {
        header: { 'Content-Type': 'application/json' }
    });
};

<<<<<<< HEAD
const updateMedia = (moduloMediaId, data) => {
    return axiosInstance.put(`moduloMedia/${moduloMediaId}`, data, {
        header: { 'Content-Type': 'application/json' }
=======
const getMediaById = (id) => {
    return axiosInstance.get(`moduloMedia/${id}`);
};

const updateMedia = (id, data) => {
    return axiosInstance.put(`moduloMedia/${id}`, data, {
        headers: { 'Content-Type': 'application/json' }
>>>>>>> c07e97c4065934aab5809739c1c0cb50c0060d67
    });
};

const deleteMedia = (id) => {
    return axiosInstance.delete(`moduloMedia/${id}`, {
        header: { 'Content-Type': 'application/json' }
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