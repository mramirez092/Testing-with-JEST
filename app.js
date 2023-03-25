// esta es mi función que suma dos números
const sum = (a,b) => a + b

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const euroToDollar = 1.2;
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * euroToDollar;
    if (valueInEuro < 0) {
        return null
    }
    return valueInDollar;
}

const EuroToYen = 127.9;
function fromEuroToYen(euros) {
    let yens = euros * EuroToYen;
    if (euros < 0) {
        return null
    }else{
    return yens;
    }
}
console.log(fromEuroToYen(-2), 'Inserte un valor real')

const EuroToPound = 0.8;
function fromEuroToPound(euros) {
    let pounds = euros * EuroToPound;
    return pounds;
}

const dollarToYen = 0.82;
function fromDollarToYen(dollars) {
    let yens = dollars * dollarToYen;
    return yens;
}
module.exports = { fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollarToYen};

