const twosum = require("./twosum");
const twosumTest = require("./twosumTest");

const arquivoAleatorio = require("./MOCK_DATA_TWOSUM.json");

// testes com casos aleatórios:
for (let i = 0; i < arquivoAleatorio.length; i++) {
    let nums = arquivoAleatorio[i].nums;
    let target = arquivoAleatorio[i].target;
    let saidaEsperada = arquivoAleatorio[i].resultado;

    test("RESULTADO FIXO - TESTE ALEATORIO - Teste com array [" + nums + "] / target " + target + " esperando o resultado " + saidaEsperada + "\n", () => {
        expect(twosum(nums, target)).toStrictEqual(saidaEsperada);
    });

    test("RESULTADO REIMPLEMENTADO - TESTE ALEATORIO - Teste com array [" + nums + "] / target " + target + " esperando o resultado " + saidaEsperada + "\n", () => {
        expect(twosum(nums, target)).toStrictEqual(twosumTest(nums, target));
    });
}