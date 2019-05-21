var MultiploCounter = class {
    constructor(multiplo) {
        this.multiplo = multiplo;
        this.counter = 0;
    }
    IncrementaSeMultiplo(numero) {
        if (numero % this.multiplo == 0)
            this.counter = this.counter + 1;
    }
};
exports.MultiploCounter = MultiploCounter;
