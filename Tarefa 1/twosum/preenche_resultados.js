const fs = require("fs");
const comum = require("./comum.js");
const twosumTest = require("./twosumTest");

const arquivo = fs.readFileSync("./twosum/MOCK_DATA_TWOSUM.json", "utf8")

arquivoObj = JSON.parse(arquivo);

function getRandomArray() {
    let qtdeNums = comum.generateRandomInt(2, 2**3)
    let array = [];

    //console.log(qtdeNums);

    for (let i = 0; i < qtdeNums; i++) {
        array.push(comum.generateRandomInt(-10000, 10001))
    }

    console.log(array);

    let target = comum.getRandomSum(array);
    console.log(target);

    resultado = twosumTest(array, target);

    let objArray = {
        "nums" : array,
        "target": target,
        "resultado" : resultado
    };

    console.log(objArray);

    return objArray;

    //console.log(objArray);
}

var objs = [];
for (let i = 0; i < 200; i++) {
    arquivoObj.push(getRandomArray());
    console.log("i é " + i);
}

fs.writeFile("./twosum/MOCK_DATA_TWOSUM.json", JSON.stringify(arquivoObj, null, 1), err => {
    if(err) throw err;
    console.log("Adicionados");
});

//console.log(objs);


