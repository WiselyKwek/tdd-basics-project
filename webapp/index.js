export function calculateDaysBetweenDates(begin, end){
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var timeDiff = endDate.getTime() - beginDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

export function calculateAreaOfTriangle(length, height){
    return length * height / 2;
}

export function calculateAreaOfRectangle(length, width){
    return length * width;
}

