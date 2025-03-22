import React from 'react'

export const MediaNew = ( {handleOpenModal} ) => {

    return (
        <div className='sidebear'>
            <div className='container-fluid'>
                <div>
                    <div className='row'>
                        <div className='col'>
                            <div className='sidebear-header'>
                                <h3 > Nueva Pelicula </h3>
                                <i class="fa-solid fa-xmark" onClick={handleOpenModal}></i>
                            </div>

                            <hr class="hr"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

