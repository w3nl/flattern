import Flattern from "../../src/flattern.js";

const TestCases = [
    {
        description: "Simple object",
        input: {
            a: 1,
            b: 2
        },
        expectedResult: {
            a: 1,
            b: 2
        }
    },
    {
        description: "2 level objects",
        input: {
            a: {
                x: "test 1",
                y: "test 2"
            },
            b: {
                x: "test 3",
                y: "test 4"
            }
        },
        expectedResult: {
            "a.x": "test 1",
            "a.y": "test 2",
            "b.x": "test 3",
            "b.y": "test 4"
        }
    },
    {
        description: "Complext object with multiple levels",
        input: {
            a: 1,
            b: 2,
            c: [3, 4],
            d: { e: 5, f: 6 },
            g: { h: { i: 7 } }
        },
        expectedResult: {
            a: 1,
            b: 2,
            "c.0": 3,
            "c.1": 4,
            "d.e": 5,
            "d.f": 6,
            "g.h.i": 7
        }
    }
];

describe.each(TestCases)(
    "Test Flattern.js",
    ({ description, input, expectedResult }) => {
        it(description, () => {
            expect(new Flattern(input).flat).toMatchObject(expectedResult);
        });
    }
);

describe("Test Flattern.js methods", () => {
    it("Get the entries", () => {
        const input = {
            a: 1,
            b: 2,
            c: [3, 4],
            d: { e: 5, f: 6 },
            g: { h: { i: 7 } }
        };
        const expectedResult = [
            ["a", 1],
            ["b", 2],
            ["c.0", 3],
            ["c.1", 4],
            ["d.e", 5],
            ["d.f", 6],
            ["g.h.i", 7]
        ];

        expect(new Flattern(input).entries()).toMatchObject(expectedResult);
    });

    it("Get the keys", () => {
        const input = {
            a: 1,
            b: 2,
            c: [3, 4],
            d: { e: 5, f: 6 },
            g: { h: { i: 7 } }
        };
        const expectedResult = ["a", "b", "c.0", "c.1", "d.e", "d.f", "g.h.i"];

        expect(new Flattern(input).keys()).toMatchObject(expectedResult);
    });

    it("Get the values", () => {
        const input = {
            a: 1,
            b: 2,
            c: [3, 4],
            d: { e: 5, f: 6 },
            g: { h: { i: 7 } }
        };
        const expectedResult = [1, 2, 3, 4, 5, 6, 7];

        expect(new Flattern(input).values()).toMatchObject(expectedResult);
    });

    it("Get the length", () => {
        const input = {
            a: 1,
            b: 2,
            c: [3, 4],
            d: { e: 5, f: 6 },
            g: { h: { i: 7 } }
        };
        const expectedResult = 7;

        expect(new Flattern(input).length).toBe(expectedResult);
    });
});
