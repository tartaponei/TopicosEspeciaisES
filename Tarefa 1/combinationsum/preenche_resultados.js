const fs = require("fs");
const comum = require("../comum.js");
const combinationsumTest = require("./combinationsumTest");

const arquivo = fs.readFileSync("./Tarefa 1/combinationsum/MOCK_DATA_COMBINATIONSUM.json", "utf8")

arquivoObj = JSON.parse(arquivo);

function getRandomArray() {
    let qtdeNums = comum.generateRandomInt(2, 2**2)
    let array = [];

    //console.log(qtdeNums);

    for (let i = 0; i < qtdeNums; i++) {
        array.push(comum.generateRandomInt(-100, 101))
    }

    let target = comum.generateRandomInt(comum.getRandomSum(array), comum.getSomatorio(array));
    console.log(target);

    resultado = combinationsumTest(array, target);

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
    //console.log("i é " + i);
}

fs.writeFile("./Tarefa 1/combinationsum/MOCK_DATA_COMBINATIONSUM.json", JSON.stringify(arquivoObj, null, 1), err => {
    if(err) throw err;
    console.log("Adicionados");
});

//console.log(objs);