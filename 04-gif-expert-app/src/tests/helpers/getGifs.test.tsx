import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs', () => {
    test('debe de traer 10 elementos', async() => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThanOrEqual(10);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
            description: expect.any(String),
            tag: expect.any(String)
        })
    })
})