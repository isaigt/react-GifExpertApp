import { renderHook } from '@testing-library/react-hooks';
import { useFetchGif } from '../../hooks/useFetchGif';

describe('Pruebas del custom hook useFetchGif', () => {
    test('debe retornar los datos iniciales correctos', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGif('One Punch') );
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBeTruthy();
    });

    test('debe retornar un arreglo de datos con imgs y un loading false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGif('One Punch') );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBeFalsy();
    });
});
