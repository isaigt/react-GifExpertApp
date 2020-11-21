import { getGifs } from '../../helpers/getGifs';

describe('Pruebas del helper getGifs', () => {
    test('debe retornar 10 elementos si se especifica la categoria', async() => {
       const imgs = await getGifs('Homero');
       expect( imgs.length ).toBe( 10 );
    });

    test('no debe retornar elementos si no se especifica la categoria', async() => {
        const imgs = await getGifs('');
        expect( imgs.length ).toBe( 0 );
    });
});
