import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas"
import {heroes} from '../../data/heroes'

describe('Test sobre archivo 09-promesas', () => { 
    test('Deberia retornar un heroe (Async)', (done) => { 
        
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroePromise => {
                
                expect(heroePromise).toEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }); 
                done();
            })

     });

    test('Deberia retornar un error si heroe no existe (Async)', (done) => { 
        
        const id = 100;

        getHeroeByIdAsync(id)
            .catch( error =>{
                expect(error).toBe(`No se pudo encontrar el héroe con el ID: ${id}`)
                done()
            })

     })
 })