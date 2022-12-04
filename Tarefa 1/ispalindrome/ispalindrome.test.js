const ispalindrome = require("./ispalindrome");
const ispalindromeTest = require("./ispalindromeTest"); // reimplementação

var arquivoAleatorio = require("./MOCK_DATA_PALINDROME.json");
var arquivoErro = require("./MOCK_DATA_PALINDROME_ERRO.json");
var arquivoLimite = require("./MOCK_DATA_PALINDROME_LIMITE.json");

var erro = "erro: numero fora dos limites";

// jest.mock("./modulo"); pra usar mocks da pasta
// jest.createModuleFromModule('modulo'); pra criar mock de módulo nativo

// testes com casos aleatórios:
for (let i = 0; i < arquivoAleatorio.length; i++) {
    let entrada = arquivoAleatorio[i].num;
    let saidaEsperada = arquivoAleatorio[i].resultado;
    test("RESULTADO FIXO - TESTE ALEATORIO - Teste com entrada " + entrada + " esperando o resultado " + saidaEsperada + "\n", () => {
        expect(ispalindrome(entrada)).toBe(saidaEsperada);
    });

    test("RESULTADO REIMPLEMENTADO - TESTE ALEATORIO - Teste com entrada " + entrada + " esperando o resultado " + saidaEsperada + "\n", () => {
        expect(ispalindrome(entrada)).toBe(ispalindromeTest(entrada));
    });
}

// testes com casos pensados para dar erro
for (let i = 0; i < arquivoErro.length; i++) {
    let entrada = arquivoErro[i].num;
    let saidaEsperada = arquivoErro[i].resultado;
    test("RESULTADO FIXO - TESTE DE ERRO -  Teste com entrada " + entrada + " esperando o resultado '" + saidaEsperada + "'\n", () => {
        expect(ispalindrome(entrada)).toBe(erro);
    });

    test("RESULTADO REIMPLEMENTADO - TESTE DE ERRO - Teste com entrada " + entrada + " esperando o resultado '" + saidaEsperada + "'\n", () => {
        expect(ispalindrome(entrada)).toBe(ispalindromeTest(entrada));
    });
}

// testes com casos de análise do valor limite
for (let i = 0; i < arquivoLimite.length; i++) {
    let entrada = arquivoLimite[i].num;
    let saidaEsperada = arquivoLimite[i].resultado;
    test("RESULTADO FIXO - TESTE DE LIMITE -  Teste com entrada " + entrada + " esperando o resultado '" + saidaEsperada + "'\n", () => {
        expect(ispalindrome(entrada)).toBe(ispalindromeTest(entrada));
    });

    test("RESULTADO REIMPLEMENTADO - TESTE DE LIMITE - Teste com entrada " + entrada + " esperando o resultado '" + saidaEsperada + "'\n", () => {
        expect(ispalindrome(entrada)).toBe(ispalindromeTest(entrada));
    });
}