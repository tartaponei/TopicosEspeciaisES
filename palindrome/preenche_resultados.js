const fs = require("fs");
const ispalindromeTest = require("./ispalindromeTest");
//var arquivo = require("./palindrome/MOCK_DATA_PALINDROME.json");

const arquivo = fs.readFileSync("./palindrome/MOCK_DATA_PALINDROME.json", "utf8")

arquivoObj = JSON.parse(arquivo);

//console.log(arquivoObj.length);

for (let i = 0; i < arquivoObj.length; i++) {
    casoTeste = arquivoObj[i];

    casoTeste.resultado = ispalindromeTest(casoTeste.num);
}

fs.writeFileSync("./palindrome/MOCK_DATA_PALINDROME.json", JSON.stringify(arquivoObj, null, 2));
