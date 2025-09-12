// A format for expressing an ordered list of integers is to use a comma separated list of either

//  *   individual integers
//  *   or a range of integers denoted by the starting integer separated from the end integer in the 
// range by a dash, '-'. The range includes all integers in the interval including both endpoints. 
// It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

// Complete the solution so that it takes a list of integers in increasing order and returns a 
// correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"


function checkRange(array, index) {
    let firstElement = array[index]
    let secondElement;
    let checkResult = false;
    let elemCount = 0;
    while (array[index+1] - array[index] == 1) {
        if (elemCount == 1) {
            checkResult = true
        }
        elemCount++; index++
        secondElement = array[index]
    }
    return [checkResult, elemCount, firstElement, secondElement]
}

function solution(list){
    const resultArr = []
    for (let i = 0; i < list.length; i++) {
        const checkResult = checkRange(list, i) 
        if (checkResult[0]) {
            resultArr.push(`${checkResult[2]}-${checkResult[3]}`)
            i+=checkResult[1]
        } else {
            resultArr.push(`${list[i]}`)
        }
    }
    return resultArr.join(',')
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

// KIND OF
// function solution(list){
//    for(var i = 0; i < list.length; i++){
//       var j = i;
//       while(list[j] - list[j+1] == -1) j++;
//       if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
//   }
//   return list.join();
// }