function calculateDaysBetweenDates(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var timeDiff = endDate.getTime() - beginDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

function calculateAreaOfTriangle(length, height) {
    return length * height / 2;
}

function calculateAreaOfRectangle(length, width) {
    return length * width;
}

describe("Testing Area of A Triangle", () => {
    it("should return the area of a triangle", () => {
        expect(calculateAreaOfTriangle(3, 4)).toBe(6);
        expect(calculateAreaOfTriangle(10, 10)).toBe(50);
        expect(calculateAreaOfTriangle(2, 2)).toBe(2);
    });
} );

describe("Testing Area of A Rectangle", () => {
    it("should return the area of a rectangle", () => {
        expect(calculateAreaOfRectangle(3, 4)).toBe(12);
        expect(calculateAreaOfRectangle(10, 10)).toBe(100);
        expect(calculateAreaOfRectangle(2, 2)).toBe(4);
    } );
} );

describe("Testing Days Between Dates", () => {
    it("should return the number of days between two dates", () => {
        expect(calculateDaysBetweenDates("01/01/2019", "01/01/2019")).toBe(0);
        expect(calculateDaysBetweenDates("01/01/2019", "01/02/2019")).toBe(1);
        expect(calculateDaysBetweenDates("01/01/2019", "01/03/2019")).toBe(2);
        expect(calculateDaysBetweenDates("01/01/2019", "01/04/2019")).toBe(3);
    } );
} );