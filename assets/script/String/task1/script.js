// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let xCount = 0;
    let oCount = 0;
    const arr = str.toLowerCase().split('')
    arr.forEach(element => {
        if (element === 'x') {
            xCount++;
        }
        if (element === 'o') {
            oCount++;
        }
    });
    if (xCount == oCount) {
        return true
    }
    return false;
}

console.log(XO('xxOo'));

task = {
    description: `Check to see if a string has the same amount of 'x's and 'o's. <br>
        The method must return a boolean and be case insensitive. 
        The string can contain any char.
    `,
    tests: [
        "ooxx", "xooxx", "ooxXm", 
        "zpzpzpp", "zzoo"
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}
task.getResults(XO)

// BEST
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }