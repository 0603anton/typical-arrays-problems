exports.min = function min(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        return Math.min.apply(null, array);
    }

}

exports.max = function max(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        return Math.max.apply(null, array);
    }

}

exports.avg = function avg(array) {
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        let sum = 0;
        let lenght = array.length;
        for (let elem of array) {
            sum += elem;
        }
        return sum / lenght;
    }
};
