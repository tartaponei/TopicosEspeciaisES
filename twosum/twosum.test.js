const twosum = require("./twosum");
const twosumTest = require("./twosumTest");

const fs = require('fs');

// leitor linha a linha
// const arqAleatorio = readline.createInterface({
//     input: fs.createReadStream('./twosum/MOCK_DATA_TWOSUM.txt'),
//     output: process.stdout,
//     terminal: false
// });

// testar com outro tipo de loop
// testar dentro do loop
// testar com json

test("twosum - aleatórios", () => {
    arqAleatorio.on("line", (line) => {
        let lineSplit = line.split(",");
    
        let arrayApoio = [];
        for (let i = 0; i < lineSplit.length; i++) {
            arrayApoio.push(parseInt(lineSplit[i])); 
        }
        alvo = getRandomSum(arrayApoio);
        expect(twosum(arrayApoio, alvo)).toBeGreaterThanOrEqual(twosumTest(arrayApoio, alvo));
    });
});

// const arqArray = readline.createInterface({
//     input: fs.createReadStream('./twosum/MOCK_DATA_TWOSUM_ARRAY.txt'),
//     output: process.stdout,
//     terminal: false
// });

test("twosum - erro de array fora do limite (8 itens)", () => {
    arqArray.on("line", (line) => {
        let lineSplit = line.split(",");
    
        let arrayApoio = [];
        for (let i = 0; i < lineSplit.length; i++) {
            arrayApoio.push(parseInt(lineSplit[i])); 
        }
        alvo = getRandomSum(arrayApoio);
        //console.log(arrayApoio);
        expect(twosum(arrayApoio, alvo)).toBe(twosumTest(arrayApoio, alvo));
    });
})

// const arqTarget = readline.createInterface({
//     input: fs.createReadStream('./twosum/MOCK_DATA_TWOSUM_TARGET_NUM.txt'),
//     output: process.stdout,
//     terminal: false
// });

test("twosum - erro de target fora do limite (entre -10000 e 10000)", () => {
    arqTarget.on("line", (line) => {
        let lineSplit = line.split(",");
    
        let arrayApoio = [];
        for (let i = 0; i < lineSplit.length; i++) {
            arrayApoio.push(parseInt(lineSplit[i])); 
        }
        alvo = getRandomSum(arrayApoio);
        //console.log(arrayApoio);
        expect(twosum(arrayApoio, alvo)).toBe(twosumTest(arrayApoio, alvo));
    });
});

test("twosum - erro de numero dentro do array fora do limite (entre -10000 e 10000)", () => {
    arqTarget.on("line", (line) => {
        let lineSplit = line.split(",");
    
        let arrayApoio = [];
        for (let i = 0; i < lineSplit.length; i++) {
            arrayApoio.push(parseInt(lineSplit[i])); 
        }
        alvo = getRandomSum(arrayApoio);
        //console.log(arrayApoio);
        expect(twosum(arrayApoio, alvo)).toBe(twosumTest(arrayApoio, alvo));
    });
});

// A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.