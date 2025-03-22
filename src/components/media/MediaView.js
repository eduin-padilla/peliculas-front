import React, { useState, useEffect } from 'react';
import {getMedia} from '../../services/mediaService';
import { MediaCard } from '../media/MediaCard';
import { MediaNew } from '../media/MediaNew';

export const MediaView = () => {

    const [ModuloMedia, setMedia] = useState([]);
    const[ openModal, setOpenModal] = useState([false]);

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

    return (
        <div className='container-fluid'>
            <div className="mt-3 mb-2 row row-cols-1 row-cols-md-6 g-4">
                {
                    ModuloMedia.map((Media) => {
                        return <MediaCard key={Media.id} Media={Media}/>
                    })
                }
            </div>


            
            {
                openModal ? <MediaNew/> :
                <button className='btn btn-primary' onClick={() => setOpenModal(!openModal)}>
                    <i class= "fa-solid fa-plus"></i>
                </button>
            } 

        </div>

        
    )
}


