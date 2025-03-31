import React, { useState, useEffect } from 'react';
import { getTipo, deleteTipo } from '../../services/tipoService';
import { TipoCard } from './TipoCard';
import TipoUpdate from './TipoUpdate';
import Swal from 'sweetalert2';

export const TipoView = () => {
    const [tipoList, setTipoList] = useState([]);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [selectedTipo, setSelectedTipo] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const listTipos = async () => {
        try {
            const { data } = await getTipo();
            setTipoList(data);
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'No se pudieron cargar los tipos', 'error');
        }
    };

    useEffect(() => {
        listTipos();
    }, []);

    const handleOpenEditModal = (tipo) => {
        setSelectedTipo(tipo);
        setOpenEditModal(!openEditModal);
    };

    const handleDeleteTipo = async (id) => {
        const result = await Swal.fire({
            title: '¿Confirmar eliminación?',
            text: 'Esta acción no se puede revertir',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        });

        if (result.isConfirmed) {
            setIsDeleting(true);
            try {
                const { success, error } = await deleteTipo(id);
                
                if (!success) {
                    throw new Error(error);
                }
                
                await listTipos();
                Swal.fire({
                    icon: 'success',
                    title: 'Eliminado',
                    text: 'Tipo eliminado correctamente',
                    timer: 2000
                });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message || 'No se pudo eliminar el tipo'
                });
            } finally {
                setIsDeleting(false);
            }
        }
    };

    return (
        <div className='container-fluid'>
            <div className="mt-3 mb-2 row row-cols-1 row-cols-md-4 g-4">
                {tipoList.map((tipo) => (
                    <TipoCard 
                        key={tipo._id} 
                        tipo={tipo}
                        onEdit={handleOpenEditModal}
                        onDelete={handleDeleteTipo}
                        isDeleting={isDeleting}
                    />
                ))}
            </div>

            {/* Modal para editar */}
            {openEditModal && (
                <TipoUpdate 
                    handleOpenModal={() => setOpenEditModal(false)}
                    listTipos={listTipos}
                    tipo={selectedTipo}
                />
            )}
        </div>
    );
};
