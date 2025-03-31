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

const updateMedia = (moduloMediaId, data) => {
    return axiosInstance.put(`moduloMedia/${moduloMediaId}`, data, {
        header: { 'Content-Type': 'application/json' }
    });
};

const deleteMedia = (id) => {
    return axiosInstance.delete(`moduloMedia/${id}`, {
        header: { 'Content-Type': 'application/json' }
    });
};

export { getMedia, createMedia, updateMedia, deleteMedia };
