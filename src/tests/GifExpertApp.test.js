import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas del componente <GifExpertApp />', () => {
    test('Debe hacer match con el snapshot', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el numero correspondiente de GifGrids', () => {
        const categorias = ['Attack on titan', 'One Punch'];
        const wrapper = shallow( <GifExpertApp  defaultCategorias={ categorias } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categorias.length );
    });
});