import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {
    const { data:images, loading } = useFetchGif( categoria );

    return (
        <>
            <h3 className="card animate__animated animate__fadeInDown">{ categoria }</h3>
            { loading && <h4 className="animate__animated animate__rotateInDownLeft">Cargando...</h4> }
            <div className="card-grid">
                    {
                        images.map( imagen => (
                            <GifGridItem key={ imagen.id } {...imagen} />
                        ))
                    }
            </div>
        </>
    );
}
