import { axiosInstance } from "../helper/axiosConfig";

const getProductora = () => {
    return axiosInstance.get('moduloProductora', {
        header: {  
            'Content-Type': 'application/json',
        }
    });
}

const createProductora = (data) => {
    return axiosInstance.post('moduloProductora', data, {
        header: {  
            'Content-Type': 'application/json',
        }
    });
}

const updateProductora = (moduloProductoraId, data) => {
    return axiosInstance.put(`moduloProductora/${moduloProductoraId}`, data, {
        header: {  
            'Content-Type': 'application/json',
        }
    });
}

const deleteProductora = (id) => {
    return axiosInstance.delete(`moduloProductora/${id}`, {
        header: {  
            'Content-Type': 'application/json',
        }
    });
}

export {
    getProductora,
    createProductora,
    updateProductora,
    deleteProductora
};
