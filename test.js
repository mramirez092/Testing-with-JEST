// importar la función sum del archivo app.js
const { fromEuroToDollar, fromEuroToYen, fromEuroToPound } = require('./app.js');

test('si convierto euro a dolar me debe dar el resultado', () =>{
    let total = fromEuroToDollar(1);
    expect(total).toBe(1.2);
})

test('si convierto 4 euros a dolar me debe dar 4.8', () =>{
    let total = fromEuroToDollar(4);
    expect(total).toBe(4.8);
});

test('si convierto 0 euros a dolar me debe dar 0', () =>{
    let total = fromEuroToDollar(0);
    expect(total).toBe(0);
})

test('si convierto -1 euro a dolar me debe dar null', () =>{
    expect(fromEuroToDollar(-1)).toBeNull();
})
//Euro to Yen

test('si convierto 1 euro a un yen debería dar 127.9', () =>{
    let total = fromEuroToYen(1);
    expect(total).toBe(127.9);
})

test('si convierto un valor en euros negativo deberia salir null', () =>{
    let total = fromEuroToYen(-1);
    expect(total).toBeNull();
})

//Euro to pound
test('si convierto 1 euro a pound deberia devolver 0.8', () =>{
    let total = fromEuroToPound(1);
    expect(total).toBe(0.8);
})

test('si convierto 20 euros a pounds deberia devolver 0.8', () =>{
    expect(fromEuroToPound(20)).toBe(16);
})