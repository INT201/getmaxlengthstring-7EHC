const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
//   if(arrayOfString === null || arrayOfString === undefined) {
//       return undefined
//   } else {
//   let maxlength = 0
//   let maxarr = []
//   for (let string of arrayOfString) {
//     if (string.length > maxlength) {
//       maxlength = string.length;
//       maxarr = [string];
//     } else if (string.length === maxlength) {
//       maxarr.push(string);
//     }
//   }
//   return maxarr;
// }
if(arrayOfString === null || arrayOfString === undefined){
    return undefined
}else {
  let maxString = []
  arrayOfString.sort((a,b) => b.length-a.length)
  maxString.push(arrayOfString[0])
  for (const arr of arrayOfString) {
    if(arr.length === arrayOfString[0].length && arrayOfString[0] !== arr) {
    maxString.push(arr)
    }
  }
  return maxString
  }
}
module.exports = getMaxLengthString
