import { axiosInstance } from "../helper/axiosConfig";

const getGenero = async () => {
    try {
        const response = await axiosInstance.get('moduloGenero', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        return { 
            success: false, 
            error: error.response?.data?.message || error.message 
        };
    }
};

const createGenero = async (data) => {
    try {
        const response = await axiosInstance.post('moduloGenero', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        return { 
            success: false, 
            error: error.response?.data?.message || error.message 
        };
    }
};

const updateGenero = async (id, data) => {
    try {
        const response = await axiosInstance.put(`moduloGenero/${id}`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        return { 
            success: false, 
            error: error.response?.data?.message || error.message 
        };
    }
};

const deleteGenero = async (id) => {
    try {
        await axiosInstance.delete(`moduloGenero/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return { success: true };
    } catch (error) {
        return { 
            success: false, 
            error: error.response?.data?.message || error.message 
        };
    }
};



export { getGenero, createGenero, updateGenero, deleteGenero };
