import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect( testUser ).toEqual( user );
    })

    test('getUsuarioActivo debe de retornar un objeto', () => {

        const activeUSer= {
            uid: 'ABC567',
            username: 'Fernando'
        }
        const user = getUsuarioActivo('Fernando');
        expect( activeUSer ).toEqual( user );
    });


})

