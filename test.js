// importar la función sum del archivo app.js
const { fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollarToYen, fromYenToPound } = require('./app.js');

test('si convierto euro a dolar me debe dar el resultado', () =>{
    expect(fromEuroToDollar(1)).toBe(1.2);
})

test('si convierto 4 euros a dolar me debe dar 4.8', () =>{
    expect(fromEuroToDollar(4)).toBe(4.8);
});

test('si convierto 0 euros a dolar me debe dar 0', () =>{
    expect(fromEuroToDollar(0)).toBe(0);
})

test('si convierto -1 euro a dolar me debe dar null', () =>{
    expect(fromEuroToDollar(-1)).toBeNull();
})
//Euro to Yen

test('si convierto 1 euro a un yen debería dar 127.9', () =>{
    expect(fromEuroToYen(1)).toBe(127.9);
})

test('si convierto un valor en euros negativo deberia salir null', () =>{
    expect(fromEuroToYen(-1)).toBeNull();
})

//Euro to pound
test('si convierto 1 euro a pound deberia devolver 0.8', () =>{
    expect(fromEuroToPound(1)).toBe(0.8);
})

test('si convierto 20 euros a pounds deberia devolver 0.8', () =>{
    expect(fromEuroToPound(20)).toBe(16);
})

//Dollars to yens
test('si convierto 23 dolares a yenes me debería devolver 3013', () =>{
    expect(fromDollarToYen(23)).toBe(3013);
})

test('si convierto 1200 dolares a yenes me debería devolver 157200', () =>{
    expect(fromDollarToYen(1200)).toBe(157200);
})

//Yen to pound
test('si convierto 4000 yenes a libras me deberia devolver 25.02', () => {
    expect(fromYenToPound(4000)).toBe(25.2);
});

test('si convierto 10000 yenes a libras me debería devolver 63', () =>{
    expect(fromYenToPound(10000)).toBe(63);
});