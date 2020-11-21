import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas del componente GifGridItem', () => {
    const title = "Prueba de titulo";
    const url = "https://localhost/prueba";
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> ); 

    test('se debe de renderizar correctamente el componente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('se debe de mostrar el titulo correcto', () => {
        const tituloWrapper = wrapper.find('p').text();
        expect( tituloWrapper ).toBe( title ); 
    });

    test('se debe mostrar la imagen con las propiedades correctas', () => {
        const imgWrapper = wrapper.find('img');
        expect( imgWrapper.prop('src') ).toBe( url ); 
        expect( imgWrapper.prop('alt') ).toBe( title ); 
    });

    test('el div debe tener la clase animate__fadeInUp', () => {
        const divWrapper = wrapper.find('div');
        expect( divWrapper.hasClass('animate__fadeInUp') ).toBe( true );
    });
});
