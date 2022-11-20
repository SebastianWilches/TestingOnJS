import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas en el archivo 08-imp-exp', () => {
    test('getHeroeById debería retornar un heroe por ID', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    })

    test('getHeroeById debería retornar undefined con un ID invalido', () => {

        const id = 1000;
        const heroe = getHeroeById(id);
        expect(heroe).toBeFalsy();

    });

    test('getHeroesByOwner, retornar owner=DC, lenght===3', () => {
        //Arrange
        const owner = 'DC';

        //Act
        const heroes = getHeroesByOwner(owner);
        //Affirm
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === 'DC'));
    });

    test('getHeroesByOwner, retornar owner=DC, lenght===3', () => {

        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual( heroes.filter((heroe) => heroe.owner==='Marvel'));

    })
})
