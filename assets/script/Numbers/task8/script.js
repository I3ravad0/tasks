// #Task Given a sorted array of integer numbers A and another 
// integer number sum, write a function that returns true if 
// there are two (distinct) numbers in A that add up to sum. 
// Return false otherwise.

// #Input
//     A: The array is guaranteed to be sorted and has at least 
// two elements. All elements are integers.
//     sum: An integer.

// #Example
//     A = [1,2,3,4], sum = 7 returns true, since 3+4=7.
//     A = [-1,2,7,15], sum = 12 returns false, since any combination 
// of two integers in the array doesn't add up to 12.
//     A = [1,3,3], sum = 2 returns false. You cannot use 1 twice.

// #Notes
// Some arrays will have many elements (>100000). Therefore, 
// please optimize your code.

function hasPair(array){
  const A = array[0], sum = array[1]
  let left = 0
  let rigth = A.length - 1;
  while (left < rigth) {
    const currentSum = A[left] + A[rigth]

    if (currentSum == sum) {
        return true;
    } else if (currentSum < sum) {
        left++
    } else {
        rigth--
    }
  }
  return false;
}



task = {
    description: `Given a sorted array of integer numbers A and another 
      integer number sum, write a function that returns true if 
      there are two (distinct) numbers in A that add up to sum. 
      Return false otherwise. <br>
      <br>
      Some arrays will have many elements (>100000).
    `,
    tests: [
        [[1,5,6,9,10,14,16,20,27,30],3],
        [[1, 3, 5, 9, 11, 20, 22, 100], 42],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 0]
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}
task.getResults(hasPair)