const { areaOfARectangle, areaOfATriangle, daysBetweenDates } = require('../webapp/index.js');
describe("Testing Area of A Triangle", () => {
    it("should return the area of a triangle", () => {
        expect(areaOfATriangle(3, 4)).toBe(6);
        expect(areaOfATriangle(10, 10)).toBe(50);
        expect(areaOfATriangle(2, 2)).toBe(4);
    });
} );

describe("Testing Area of A Rectangle", () => {
    it("should return the area of a rectangle", () => {
        expect(areaOfARectangle(3, 4)).toBe(12);
        expect(areaOfARectangle(10, 10)).toBe(100);
        expect(areaOfARectangle(2, 2)).toBe(4);
    } );
} );

describe("Testing Days Between Dates", () => {
    it("should return the number of days between two dates", () => {
        expect(daysBetweenDates("01/01/2019", "01/01/2019")).toBe(0);
        expect(daysBetweenDates("01/01/2019", "01/02/2019")).toBe(1);
        expect(daysBetweenDates("01/01/2019", "01/03/2019")).toBe(2);
        expect(daysBetweenDates("01/01/2019", "01/04/2019")).toBe(3);
    } );
} );