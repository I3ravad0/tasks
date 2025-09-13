// You are going to be given a non-empty string. Your job is to Return 
// the middle character(s) of the string.

//     If the string's length is odd, return the middle character.
//     If the string's length is even, return the middle 2 characters.

// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
    return s.length % 2 ? (s.slice((s.length / 2),(s.length / 2 + 1))) : (s.slice((s.length / 2 - 1),(s.length / 2 + 1)))
}

console.log(getMiddle('string'));

task = {
    description: `Return the middle character(s) of the string. <br> <br>
    If the string's length is odd, return the middle character.<br>
    If the string's length is even, return the middle 2 characters.
    `,
    tests: [
        'some long string',
        'string',
        'str'
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}
task.getResults(getMiddle)

// BEST
// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }