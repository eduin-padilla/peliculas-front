import { axiosInstance }  from "../helper/axiosConfig";

const getDirector = () => {
    return axiosInstance.get('moduloDirector', {
        header: {
                'Content-Type': 'application/json',
            }
        });
}

const createDirector = (data) => {
    return axiosInstance.post('moduloDirector', data, {
        header: {
                'Content-Type': 'application/json',
            }
        });
}

const updateDirector = (moduloDirectorId, data) => {
    return axiosInstance.put(`moduloDirector/${moduloDirectorId}`, data, {
        header: {
                'Content-Type': 'application/json',
            }
        });
}

const deleteDirector = (id) => {
    return axiosInstance.delete('moduloDirector/'+id, {
        header: {
                'Content-Type': 'application/json',
            }
        });
}

export {
    getDirector,
    createDirector,
    updateDirector,
    deleteDirector
}
