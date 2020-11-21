import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGif } from '../../hooks/useFetchGif';
jest.mock('../../hooks/useFetchGif');

describe('Pruebas con el componente <GifGrid />', () => {
    
    test('debe hacer match con el snapshot', () => {
        useFetchGif.mockReturnValue({
            data: [],
            loading: true
        });

        const categoria = 'One Punch';
        const wrapper = shallow( <GifGrid categoria={ categoria } /> );
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('deben de mostrarse los elementos del GrifGridItem', () => {
        const imgs = [{
            id: '123456',
            title: 'Hola Mundo',
            url: 'https://localhost/holamundo.gif'
        }];

        useFetchGif.mockReturnValue({
            data: imgs,
            loading: false
        });
        
        const categoria = 'One Punch';
        const wrapper = shallow( <GifGrid categoria={ categoria } /> );

        //  expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h4').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( imgs.length );
    });
});
