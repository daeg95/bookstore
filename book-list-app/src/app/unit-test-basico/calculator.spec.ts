// 1. Se importa el componente al cual se le va a hacer el test.
import { Calculator } from "./calculator";

// 2. Se define la suite de test 
describe("Prueba del metodo multiply", ()=>{
    //3. Se realiza el test particular de la siute de test
    it('#multiply deberia devolver 9', () => {
        //Arrange --> Preparacion de todo lo necesario para el test 
        const calculator = new Calculator;
        //Act --> Ejecutar el codigo que se quiere probar
        const rta = calculator.multiply(3,3);
        //Assert --> Comprobacion de la hipotesis
        expect(rta).toEqual(9);
    });
})

// Suite test case de diferentes tipos de matchers
describe("Pruebas  con diferentes matchers", ()=>{
    it('#multiply deberia devolver 4', () => {
        const calculator = new Calculator;
        // Act y Assert 
        expect(calculator.multiply(4,1)).toEqual(4);
    });

    it('matcher defined and undefined', () => {
        let name = "Carmen";
        let name2;
        // Act y Assert 
        expect(name).toBeDefined();
        expect(name2).toBeUndefined();
    });

    it('matcher true and false', () => {
        expect(1 + 3 === 3).toBeTruthy(); // falla por que deberia devolver 4
        expect(1 + 1 === 3).toBeFalsy();
    });

    it('matcher less than ans greater than', () => {
        expect(5).toBeLessThan(9);
        expect(20).toBeGreaterThan(10);
    });

    it('matcher regular expression', () => {
        expect("123456").toMatch(/123/);
    });

    it('matcher in array', () => {
        expect(["apples", "oranges", "pears"]).toContain("oranges");
    });
})

// Suite test case para dividir
describe("Pruebas para dividir", ()=>{
    it('#divide deberia devolver 2', () => {
        const calculator = new Calculator;
        // Act y Assert 
        expect(calculator.divide(6,3)).toEqual(2);
    });

    it('#divide deberia devolver 2', () => {
        const calculator = new Calculator;
        // Act y Assert 
        expect(calculator.divide(5,0)).toBeNull;
    });
})