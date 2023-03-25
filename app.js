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

const euroToYen = 127.9;
function fromEuroToYen(euros) {
    let yens = euros * euroToYen;
    if (euros < 0) {
        return null
    }else{
    return yens;
    }
}
console.log(fromEuroToYen(-2), 'Inserte un valor real')

const euroToPound = 0.8;
function fromEuroToPound(euros) {
    let pounds = euros * euroToPound;
    return pounds;
}

const dollarToYen = 131;
function fromDollarToYen(dollars) {
    let yens = dollars * dollarToYen;
    return yens;
}

const yenToPound = 0.0063;
function fromYenToPound(yenes) {
    let pounds = yenes * yenToPound;
    return pounds;
}
module.exports = { fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollarToYen, fromYenToPound};

