exports.min = function min (array) {
    let min = 0;
    if  (!array || array.length === 0) {
        return 0;
      }
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}

exports.max = function max (array) {
     let max = 0;
     if  (!array || array.length === 0) {
        return 0;
      }
     
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) max = array[i];
    } 
    return max;
}

exports.avg = function avg (array) {
    sum = 0;
    if  (!array || array.length === 0) {
        return 0;
      }
    
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    let avg = sum/array.length;
  return avg;
}
