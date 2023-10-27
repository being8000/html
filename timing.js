/**
 * @website https://javascript.info/animation
 * @website https://www.desmos.com/calculator/ebdtbxgbq0
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


function stretchY(t) {
  return Math.pow(1 - t, 3) * 0 +
    3 * t * Math.pow(1 - t, 2) * 0.154 +
    3 * Math.pow(t, 2) * (1 - t) * 0.434 +
    Math.pow(t, 3) * 1
}