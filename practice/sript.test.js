// import { describe } from "yargs";

const { capital, reverse, ccesar, analyzeArray, sub, div, mux, add } = require('./sript.js');

describe("Test calculator", () => {
    test("1 + 2 = 3", () => {
        expect(add(1, 2)).toBe(3);
    });

    test("1 - 2 = -1", () => {
        expect(sub(1, 2)).toBe(-1);
    });

    test("1 * 2 = 2", () => {
        expect(mux(1, 2)).toBe(2);
    });

    test("1 / 2 = 0.5", () => {
        expect(div(1, 2)).toBe(0.5);
    });
});

describe("Test Caesar cipher", () => {
    test("ccesar('xyz', 3) = 'abc'", () => {
        expect(ccesar('xyz', 3)).toBe('abc');
    });

    test("ccesar('HeLLo', 3) = 'KhOOr'", () => {
        expect(ccesar('HeLLo', 3)).toBe('KhOOr');
    });

    test("ccesar('Hello, World!', 3) = 'Khoor, Zruog!'", () => {
        expect(ccesar('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
});

describe("Test reverse", () => {
    test("reverse('Hello') = 'olleH'", () => {
        expect(reverse('Hello')).toBe('olleH');
    });
});

describe("Test capital", () => {
    test("capital('hello') = 'HELLO'", () => {
        expect(capital('hello')).toBe('Hello');
    });
});

describe("Test analyzeArray", () => {
    test("analyzeArray([1, 8, 3, 4, 2, 6]) = { sum: 24, average: 4, min: 1, max: 8, length: 6 }", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            sum: 24,
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });
});