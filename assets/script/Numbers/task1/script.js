// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square 
// after the one passed as a parameter. Recall that an integral perfect square is 
// an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty 
// value like None or null, depending on your language. You may assume the argument 
// is non-negative.

// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        return (Math.sqrt(sq)+1)**2
    } else {
        return -1;
    }
}

console.log(findNextSquare(121));

task = {
    description: `Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer <br>
    If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.. `,
    tests: [
        121, 135, 169, -5, 0, 25
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}
task.getResults(findNextSquare)

// BEST
// function findNextSquare(sq) {
//   return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
// }