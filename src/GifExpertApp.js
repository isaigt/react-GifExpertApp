import React,{ useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = ({ defaultCategorias=[] }) => {
    const [categorias, setCategorias] = useState( defaultCategorias );

    return (
        <>
            <h2 className="animate__animated animate__lightSpeedInLeft">GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias } />
            <hr />
            <ol>
                {
                    categorias.map( category => (
                        <GifGrid key={ category } categoria={ category } />
                    ))
                }
            </ol>
        </>
    );
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp;