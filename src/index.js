 module.exports = function reverse (n) {
  return (""+Math.abs(n)).split("").reverse().join("")
}

// console.log(reverse(123));
// console.log(reverse(-123));