const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var numeroDiInteriDaEsaminare = 0;
var recursion = 0;
rl.question('Inserisci quanti numeri interi vuoi esaminare? ', (input) => {

    console.log(`Esaminero ${input} numeri interi`);

    numeroDiInteriDaEsaminare = input;

    response = {
        multiplidiDue: 0,
        multipliDiCinque: 0,
        multipliDiDieci: 0,
    };

    LeggiINumeriDaEsaminare = () => {

        rl.question(`Inserisci il numero intero ${numeroDiInteriDaEsaminare}°: `, (numero) => {
            numeroDiInteriDaEsaminare = numeroDiInteriDaEsaminare - 1;

            console.log(`Hai inserito il numero: ${numero} `);
            if (numero % 2 == 0) response.multiplidiDue = response.multiplidiDue + 1;
 
            if (numeroDiInteriDaEsaminare == 0) {
                console.log(response);
                return rl.close();
            }
            LeggiINumeriDaEsaminare();
        });
    };
    LeggiINumeriDaEsaminare();
});