const exAssync = require ("../exAssync");

test("ordena assíncrona -> [3,8,4,9,1] pra ser [1,3,4,8,9]\n", () => {
    return exAssync.ordenaAssync([3,8,4,9,1]).then(numsOrdenado => {
        expect(numsOrdenado).toEqual([1,3,4,8,9]);
    });
});

test("ordena assíncrona com .resolves -> [3,8,4,9,1] pra ser [1,3,4,8,9]\n", () => {
    return expect(exAssync.ordenaAssync([3,8,4,9,1])).resolves.toEqual([1,3,4,8,9]);
});

test("ordena assíncrona -> [3,8,'a',9,1] pra ser 'algum dado não é um número'\n", () => {
    return exAssync.ordenaAssync([3,8,'a',9,1]).catch(erro => {
        expect(erro).toBe("algum dado não é um número");
    });
});

