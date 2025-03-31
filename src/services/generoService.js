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

<<<<<<< HEAD
const createGenero = ( data ) => {
    return axiosInstance.post('moduloGenero', data, {
        header: {
                'Content-Type': 'application/json',

const createGenero = async (data) => {
    try {
        const response = await axiosInstance.post('moduloGenero', data, {
            headers: {
                'Content-Type': 'application/json'
>>>>>>> c07e97c4065934aab5809739c1c0cb50c0060d67
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

<<<<<<< HEAD
const updateGenero = ( moduloGeneroId, data ) => {
    return axiosInstance.put(`moduloGenero/${moduloGeneroId}`, data, {
        header: {
                'Content-Type': 'application/json',
=======
const updateGenero = async (id, data) => {
    try {
        const response = await axiosInstance.put(`moduloGenero/${id}`, data, {
            headers: {
                'Content-Type': 'application/json'
>>>>>>> c07e97c4065934aab5809739c1c0cb50c0060d67
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

<<<<<<< HEAD
const deleteGenero = ( id ) => {
    return axiosInstance.delete('moduloGenero/'+id, {
        header: {
                'Content-Type': 'application/json',
=======
const deleteGenero = async (id) => {
    try {
        await axiosInstance.delete(`moduloGenero/${id}`, {
            headers: {
                'Content-Type': 'application/json'
>>>>>>> c07e97c4065934aab5809739c1c0cb50c0060d67
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