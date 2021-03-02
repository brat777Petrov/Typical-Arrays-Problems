
exports.min = function min (array) {
  var minOfArray = 0;
  if (!array) return 0;
    for (var i = 0; i < array.length; i++ ) {
      if ( minOfArray > array[i] ) minOfArray = array[i];
    }
  return minOfArray;
}

exports.max = function max (array) {
  var maxOfArray = 0;
  if (!array) return 0;
  for (var i = 0; i < array.length; i++ ) {
    if ( maxOfArray < array[i] ) maxOfArray = array[i];
  }
  return maxOfArray;
}

exports.avg = function avg (array) {
var avgOfArray = 0;
if (!array) return 0;
  for (var i = 0; i < array.length; i++ ) {
    avgOfArray += array[i];
  }
  return avgOfArray/array.length||0;
}
