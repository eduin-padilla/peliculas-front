import { axiosInstance }  from "../helper/axiosConfig";

const getProductora = () => {
    return axiosInstance.get('moduloProductora', {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

const createProductora = (data) => {
    return axiosInstance.post('moduloProductora', data, {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

const updateProductora = (moduloProductoraId, data) => {
    return axiosInstance.put(`moduloProductora/${moduloProductoraId}`, data, {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

const deleteProductora = (id) => {
    return axiosInstance.delete('moduloProductora/'+id, {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

export{
    getProductora,
    createProductora,
    updateProductora,
    deleteProductora
}
