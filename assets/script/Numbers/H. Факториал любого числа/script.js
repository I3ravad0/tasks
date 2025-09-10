// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer n and returns the value of n!.

// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000" as a string.

// For more on factorials, see http://en.wikipedia.org/wiki/Factorial

// NOTES:

//     The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

//     I have removed the use of require in the javascript language.



function multiplyBigNumbers(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();
  const result = new Array(num1Str.length + num2Str.length).fill(0);

  for (let i = num1Str.length - 1; i >= 0; i--) {
    const digit1 = parseInt(num1Str[i]);
    for (let j = num2Str.length - 1; j >= 0; j--) {
      const digit2 = parseInt(num2Str[j]);
      const product = digit1 * digit2;
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = product + result[p2];

      result[p1] += Math.floor(sum / 10);
      result[p2] = sum % 10;
    }
  }

  let resultStr = result.join('');
  while (resultStr[0] === '0' && resultStr.length > 1) {
    resultStr = resultStr.slice(1);
  }
  return resultStr;
}

function factorial(n){
    let result = '1'
    for (let i = 1; i <= n; i++) {
        result = multiplyBigNumbers(result,i)
    }
    return result
}

console.log(factorial(25));

// BEST
// function factorial(n) {
//   var res = [1];
//   for (var i = 2; i <= n; ++i) {
//     var c = 0;
//     for (var j = 0; j < res.length || c !== 0; ++j) {
//       c += (res[j] || 0) * i;
//       res[j] = c % 10;
//       c = Math.floor(c / 10);
//     }
//   }
//   return res.reverse().join("");
// }