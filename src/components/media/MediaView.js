import React, { useState, useEffect } from 'react';
import {getMedia} from '../../services/mediaService';
import { MediaCard } from '../media/MediaCard';
import { MediaNew } from '../media/MediaNew';

export const MediaView = () => {

    const [Media, setMedia] = useState([]);
    const[ openModal, setOpenModal] = useState( false );

    const listMedia = async () => {

        try {
            const{ data } = await getMedia();
            console.log(data);
            setMedia(data);
            
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listMedia();
    }, []);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }
    return (
        <div className='container-fluid'>
            <div className="mt-3 mb-2 row row-cols-1 row-cols-md-6 g-4">
                {
                    Media.map((Media) => {
                        return <MediaCard key = { Media._id } Media = { Media }/>
                    })
                }
            </div>
            {
                openModal ? <MediaNew handleOpenModal = { handleOpenModal } />: 
                <button className='btn btn-primary new-media' onClick = { handleOpenModal }>
                    <i className= "fa-solid fa-plus"></i>
                </button>
            } 
        </div>
    )
}


