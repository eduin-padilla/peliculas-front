import React, { useState, useEffect } from 'react';
import { getMedia, deleteMedia } from '../../services/mediaService';
import { MediaCard } from '../media/MediaCard';
import { MediaNew } from '../media/MediaNew';
import MediaUpdate from '../media/MediaUpdate';
import Swal from 'sweetalert2';

export const MediaView = () => {
    const [mediaList, setMediaList] = useState([]);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const listMedia = async () => {
        try {
            const { data } = await getMedia();
            setMediaList(data);
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'No se pudieron cargar los medios', 'error');
        }
    };

    useEffect(() => {
        listMedia();
    }, []);

    const handleOpenCreateModal = () => {
        setOpenCreateModal(!openCreateModal);
    };

    const handleOpenEditModal = (media) => {
        setSelectedMedia(media);
        setOpenEditModal(!openEditModal);
    };

    const handleDeleteMedia = async (id) => {
        try {
            const result = await Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esta acción!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            });

            if (result.isConfirmed) {
                setIsDeleting(true);
                await deleteMedia(id);
                await listMedia(); // Actualizar la lista después de eliminar
                Swal.fire(
                    '¡Eliminado!',
                    'El medio ha sido eliminado correctamente.',
                    'success'
                );
            }
        } catch (error) {
            console.error("Error al eliminar:", error);
            Swal.fire(
                'Error',
                'No se pudo eliminar el medio',
                'error'
            );
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className='container-fluid'>
            <div className="mt-3 mb-2 row row-cols-1 row-cols-md-6 g-4">
                {mediaList.map((media) => (
                    <MediaCard 
                        key={media._id} 
                        media={media}
                        onEdit={handleOpenEditModal}
                        onDelete={handleDeleteMedia}
                        isDeleting={isDeleting}
                    />
                ))}
            </div>

            {/* Modal para crear nuevo */}
            {openCreateModal && (
                <MediaNew 
                    handleOpenModal={handleOpenCreateModal}
                    listMedia={listMedia} 
                />
            )}

            {/* Modal para editar */}
            {openEditModal && (
                <MediaUpdate 
                    handleOpenModal={() => setOpenEditModal(false)}
                    listMedia={listMedia}
                    media={selectedMedia}
                />
            )}

            <button 
                className='btn btn-primary new-media' 
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