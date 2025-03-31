import React, { useState, useEffect } from 'react';
import { getDirector, deleteDirector } from '../../services/directorService';
import { DirectorCard } from './DirectorCard';
import { DirectorNew } from './DirectorNew';
import DirectorUpdate from './DirectorUpdate';
import Swal from 'sweetalert2';

export const DirectorView = () => {
    const [directorList, setDirectorList] = useState([]);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [selectedDirector, setSelectedDirector] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const listDirectores = async () => {
        try {
            const { data } = await getDirector();
            setDirectorList(data);
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'No se pudieron cargar los directores', 'error');
        }
    };

    useEffect(() => {
        listDirectores();
    }, []);

    const handleOpenCreateModal = () => {
        setOpenCreateModal(!openCreateModal);
    };

    const handleOpenEditModal = (director) => {
        setSelectedDirector(director);
        setOpenEditModal(!openEditModal);
    };

    const handleDeleteDirector = async (id, nombre) => {
        try {
            const result = await Swal.fire({
                title: `¿Eliminar director ${nombre}?`,
                text: "Esta acción no se puede deshacer",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            });
    
            if (result.isConfirmed) {
                const response = await deleteDirector(id);
                console.log('Respuesta del servidor:', response.data);
                
                await listDirectores();
                Swal.fire(
                    '¡Eliminado!',
                    'El director ha sido eliminado correctamente.',
                    'success'
                );
            }
        } catch (error) {
            console.error("Error completo:", error);
            console.error("Respuesta de error:", error.response);
            
            Swal.fire(
                'Error',
                error.response?.data?.message || error.message || 'No se pudo eliminar el director',
                'error'
            );
        }
    };

    return (
        <div className='container-fluid'>
            <div className="mt-3 mb-2 row row-cols-1 row-cols-md-4 g-4">
                {directorList.map((director) => (
                    <DirectorCard 
                        key={director._id} 
                        director={director}
                        onEdit={handleOpenEditModal}
                        onDelete={handleDeleteDirector}
                        isDeleting={isDeleting}
                    />
                ))}
            </div>

            {/* Modal para crear nuevo */}
            {openCreateModal && (
                <DirectorNew 
                    handleOpenModal={handleOpenCreateModal}
                    listDirectores={listDirectores} 
                />
            )}

            {/* Modal para editar */}
            {openEditModal && (
                <DirectorUpdate 
                    handleOpenModal={() => setOpenEditModal(false)}
                    listDirectores={listDirectores}
                    director={selectedDirector}
                />
            )}

            <button 
                className='btn btn-primary new-director' 
                onClick={handleOpenCreateModal}
                disabled={isDeleting}
            >
                {isDeleting ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                    <i className="fa-solid fa-plus"></i>
                )}
            </button>
        </div>
    );
};