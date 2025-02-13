// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))



// Definimos el objeto con los valores de conversión usando const
const oneEuroIs = {
    "JPY": 156.5, // 1 EUR = 156.5 JPY
    "USD": 1.07,  // 1 EUR = 1.07 USD
    "GBP": 0.87   // 1 EUR = 0.87 GBP
};

// Función para convertir de dólares a yenes
const fromDollarToYen = (amountInDollars) => {
    // Primero convertimos dólares a euros, luego euros a yenes
    const amountInEuros = amountInDollars / oneEuroIs["USD"];
    const amountInYen = amountInEuros * oneEuroIs["JPY"];
    return amountInYen;
};

// Función para convertir de euros a dólares
const fromEuroToDollar = (amountInEuros) => {
    // Convertimos euros a dólares directamente
    const amountInDollars = amountInEuros * oneEuroIs["USD"];
    return amountInDollars;
};

// Función para convertir de yenes a libras esterlinas
const fromYenToPound = (amountInYen) => {
    // Primero convertimos yenes a euros, luego euros a libras
    const amountInEuros = amountInYen / oneEuroIs["JPY"];
    const amountInPounds = amountInEuros * oneEuroIs["GBP"];
    return amountInPounds;
};


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum , fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound};