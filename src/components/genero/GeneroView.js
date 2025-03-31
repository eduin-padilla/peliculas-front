import React, { useState, useEffect } from 'react';
import { getGenero, deleteGenero } from '../../services/generoService';
import { GeneroCard } from './GeneroCard';
import { GeneroNew } from './GeneroNew';
import GeneroUpdate from './GeneroUpdate';
import Swal from 'sweetalert2';

export const GeneroView = () => {
    const [generoList, setGeneroList] = useState([]);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [selectedGenero, setSelectedGenero] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const listGeneros = async () => {
        try {
            const { data } = await getGenero();
            setGeneroList(data);
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'No se pudieron cargar los géneros', 'error');
        }
    };

    useEffect(() => {
        listGeneros();
    }, []);

    const handleOpenCreateModal = () => {
        setOpenCreateModal(!openCreateModal);
    };

    const handleOpenEditModal = (genero) => {
        setSelectedGenero(genero);
        setOpenEditModal(!openEditModal);
    };

    const handleDeleteGenero = async (id) => {
        const result = await Swal.fire({
            title: '¿Confirmar eliminación?',
            text: "Esta acción no se puede revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        });
    
        if (result.isConfirmed) {
            setIsDeleting(true);
            try {
                const { success, error } = await deleteGenero(id);
                
                if (!success) {
                    throw new Error(error);
                }
                
                await listGeneros();
                Swal.fire({
                    icon: 'success',
                    title: 'Eliminado',
                    text: 'Género eliminado correctamente',
                    timer: 2000
                });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message || 'No se pudo eliminar el género'
                });
            } finally {
                setIsDeleting(false);
            }
        }
    };

    return (
        <div className='container-fluid'>
            <div className="mt-3 mb-2 row row-cols-1 row-cols-md-4 g-4">
                {generoList.map((genero) => (
                    <GeneroCard 
                        key={genero._id} 
                        genero={genero}
                        onEdit={handleOpenEditModal}
                        onDelete={handleDeleteGenero}
                        isDeleting={isDeleting}
                    />
                ))}
            </div>

            {/* Modal para crear nuevo */}
            {openCreateModal && (
                <GeneroNew 
                    handleOpenModal={handleOpenCreateModal}
                    listGeneros={listGeneros} 
                />
            )}

            {/* Modal para editar */}
            {openEditModal && (
                <GeneroUpdate 
                    handleOpenModal={() => setOpenEditModal(false)}
                    listGeneros={listGeneros}
                    genero={selectedGenero}
                />
            )}

            <button 
                className='btn btn-primary new-genero' 
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