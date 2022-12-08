const exAssync = require ("../exAssync");

test("soma assíncrona -> 9 + 7 pra dar 16", () => {
    //expect(exAssync.somaAssync(9, 7).toBe(16)) // não funciona

    return exAssync.somaAssync(9, 7).then(soma => {
        expect(soma).toBe(16);
    });
});

test("soma assíncrona -> 9 + 'a' pra dar 'algum dado não é numero'", () => {
    //expect(exAssync.somaAssync(9, 7).toBe(16)) // não funciona

    return exAssync.somaAssync(9, 7).catch(erro => {
        expect(erro).toBe("algum dado não é numero");
    });
});