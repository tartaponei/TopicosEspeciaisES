const combinationsum = require("../combinationsum");
//const combinationsumTest = require("../combinationsumTest");

jest.mock("../__mocks__/trycomb.js");

test("teste do teste com mock", () => {
    expect(combinationsum([2,3,6,7], 7)).toEqual([ [ 2, 2, 3 ], [ 7 ] ]);
});