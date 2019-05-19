const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var numeroDiInteriDaEsaminare = 0;
rl.question('Inserisci quanti numeri interi vuoi esaminare? ', (input) => {
    // TODO: Log the answer in a database
    console.log(`Esaminero ${input} numeri interi`);

    numeroDiInteriDaEsaminare = input;

    LeggiINumeriDaEsaminare = (numeroDiInteriDaEsaminare) => {
        rl.question(`Inserisci il numero intero ${numeroDiInteriDaEsaminare}°: `, (numero) => {
            numeroDiInteriDaEsaminare = numeroDiInteriDaEsaminare - 1;
            if (numeroDiInteriDaEsaminare == 0) return rl.close();

            console.log(`Hai inserito il numero: ${numero} `);

            LeggiINumeriDaEsaminare(numeroDiInteriDaEsaminare);
        });
    };
    LeggiINumeriDaEsaminare(numeroDiInteriDaEsaminare);
});