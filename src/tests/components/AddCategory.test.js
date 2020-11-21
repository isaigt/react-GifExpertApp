import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas del componente <AddCategory />', () => {
    const setCategorias = jest.fn();
    let wrapper = shallow( <AddCategory setCategorias={ setCategorias } /> ); 

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategorias={ setCategorias } /> );
    });

    test('se debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('se debe actualizar el input al ocurrir el evento onChange', () => {
        const inp = wrapper.find('input');
        const value = "Hola mundo";

        inp.simulate('change', { target: { value } });
        expect( wrapper.find('p').text() ).toBe( value );
    });

    test('NO se debe de ejecutar la funcion setCategorias', () => {
        const frm =wrapper.find('form');
        frm.simulate('submit', { preventDefault(){} });
        expect( setCategorias ).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategorias y limpiar la caja de texto', () => {
        const valor = 'Hola Mundo';
        const inp = wrapper.find('input');
        inp.simulate( 'change', { target: { value: valor } } );
        wrapper.find('form').simulate( 'submit', { preventDefault(){} });

        expect( setCategorias ).toHaveBeenCalledWith( expect.any(Function) );
        expect( setCategorias ).toHaveBeenCalled();
        expect( inp.find('input').prop('value') ).toBe( '' );
    });
});
