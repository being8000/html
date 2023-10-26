/**
 * @website https://javascript.info/animation
 * @param {*}  
 * @returns 
 */
function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

function linear(timeFraction) {
  return timeFraction;
}

// accepts a timing function, returns the transformed variant
function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}