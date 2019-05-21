const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var numeroDiInteriDaEsaminare = 0;
var recursion = 0;

var MultiploCounter = class {

    constructor(multiplo) {
        this.multiplo = multiplo;
        this.counter=0;
    }
    IncrementaSeMultiplo(numero) {
        if (numero % this.multiplo == 0) this.counter = this.counter + 1;
    }
};

rl.question('Inserisci quanti numeri interi vuoi esaminare? ', (input) => {

    console.log(`Esaminero ${input} numeri interi`);

    numeroDiInteriDaEsaminare = input;
    response = {
        multipliDiDue: new MultiploCounter(2),
        multipliDiCinque: new MultiploCounter(5),
        multipliDiDieci: new MultiploCounter(10),
    };

    LeggiINumeriDaEsaminare = () => {

        rl.question(`Inserisci il numero intero ${numeroDiInteriDaEsaminare}°: `, (numero) => {
            
            numeroDiInteriDaEsaminare = numeroDiInteriDaEsaminare - 1;

            console.log(`Hai inserito il numero: ${numero} `);

            response.multipliDiDue.IncrementaSeMultiplo(numero);
            response.multipliDiCinque.IncrementaSeMultiplo(numero);
            response.multipliDiDieci.IncrementaSeMultiplo(numero);

            if (numeroDiInteriDaEsaminare == 0) {
                console.log(response);
                return rl.close();
            }
            LeggiINumeriDaEsaminare();
        });
    };
    LeggiINumeriDaEsaminare();
});