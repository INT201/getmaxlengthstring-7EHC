const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  if(arrayOfString === null || arrayOfString === undefined) {
      return undefined
  } else {
  let maxlength = 0
  let maxarr = []
  for (let string of arrayOfString) {
    if (string.length > maxlength) {
      maxlength = string.length;
      maxarr = [string];
    } else if (string.length === maxlength) {
      maxarr.push(string);
    }
  }
  return maxarr;
}
}
module.exports = getMaxLengthString
