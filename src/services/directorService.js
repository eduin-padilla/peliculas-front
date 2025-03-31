import { axiosInstance }  from "../helper/axiosConfig";

const getDirector = () => {
    return axiosInstance.get('moduloDirector', {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

const createDirector = (data) => {
    return axiosInstance.post('moduloDirector', data, {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

const updateDirector = (moduloDirectorId, data) => {
    return axiosInstance.put(`moduloDirector/${moduloDirectorId}`, data, {
        headers: {
                'Content-Type': 'application/json',
            }
        });
}

const deleteDirector = (id) => {
    return axiosInstance.delete(`moduloDirector/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            // Agrega otros headers necesarios como Authorization si es requerido
        }
    });
};

export {
    getDirector,
    createDirector,
    updateDirector,
    deleteDirector
}
