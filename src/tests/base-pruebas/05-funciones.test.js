import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en el archivo 05-funciones', () => { 
    test('getUser debería retornar un objeto', () => { 
        
        //Arrange
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        //Act
        const functionUser = getUser();
        
        //Affirm
        expect(testUser).toEqual(functionUser);

     });


     test('getUsuarioActivo deberia retornar un objeto', () => { 
        
        //Arrange
        const name = 'Sebastian';
        const testUser = {
            uid: 'ABC567',
            username: name
        };

        //Act
        const functionUser = getUsuarioActivo(name);

        //Affirm
        expect(testUser).toEqual(functionUser);
      })
 })