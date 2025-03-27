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

const updateMedia = (moduloMediaId, data) => {
    return axiosInstance.put(`moduloMedia/${moduloMediaId}`, data, {
        headers: { 'Content-Type': 'application/json' }
    });
};

const deleteMedia = (id) => {
    return axiosInstance.delete(`moduloMedia/${id}`, {
        headers: { 'Content-Type': 'application/json' }
    });
};

export { getMedia, createMedia, updateMedia, deleteMedia };
