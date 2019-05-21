const {
    MultiploCounter
} = require("./MultiploCounter");

const readline = require('readline');


var readlineSync = require('readline-sync');

var numeroDiInteriDaEsaminare = 0;
var recursion = 0;

response = {
    multipliDiDue: new MultiploCounter(2),
    multipliDiCinque: new MultiploCounter(5),
    multipliDiDieci: new MultiploCounter(10),
};

var input = readlineSync.question('Inserisci quanti numeri interi vuoi esaminare? ');

console.log(`Esaminero ${input} numeri interi`);

numeroDiInteriDaEsaminare = input;


while (numeroDiInteriDaEsaminare > 0) {
    var numero = readlineSync.question(`Inserisci il numero intero ${numeroDiInteriDaEsaminare}°: `);
    numeroDiInteriDaEsaminare = numeroDiInteriDaEsaminare - 1;

    response.multipliDiDue.IncrementaSeMultiplo(numero);
    response.multipliDiCinque.IncrementaSeMultiplo(numero);
    response.multipliDiDieci.IncrementaSeMultiplo(numero);

}

console.log(response);