import { axiosInstance } from "../helper/axiosConfig";

const getMedia = async () => {
    try {
        const response = await axiosInstance.get('moduloMedia', {
            headers: { 'Content-Type': 'application/json' }
        });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response?.data?.message || error.message };
    }
};

const getMediaById = async (id) => {
    try {
        const response = await axiosInstance.get(`moduloMedia/${id}`);
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response?.data?.message || error.message };
    }
};

const createMedia = async (data) => {
    try {
        const response = await axiosInstance.post('moduloMedia', data, {
            headers: { 'Content-Type': 'application/json' }
        });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response?.data?.message || error.message };
    }
};

const updateMedia = async (id, data) => {
    try {
        const response = await axiosInstance.put(`moduloMedia/${id}`, data, {
            headers: { 'Content-Type': 'application/json' }
        });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response?.data?.message || error.message };
    }
};

const deleteMedia = async (id) => {
    try {
        await axiosInstance.delete(`moduloMedia/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        });
        return { success: true };
    } catch (error) {
        return { success: false, error: error.response?.data?.message || error.message };
    }
};

// Exportación única de todas las funciones
export { getMedia, createMedia, getMediaById, updateMedia, deleteMedia };
