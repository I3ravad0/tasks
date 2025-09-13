// Complete the solution so that it Splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the 
// missing second character of the final pair with an underscore ('_').

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    const arr = [];
    for (let i = 0; i < str.length; i+=2) {
        arr.push(`${str[i]}${str[i+1] || '_'}`)
    }
    return arr;
}

console.log(solution('aabbccd'));

task = {
    description: `Splits the string into pairs of two characters.  <br>
        If the string contains an odd number of characters then it should replace the 
        missing second character of the final pair with an underscore ('_').
    `,
    tests: [
        'Application', 'Name', 'Eye'
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}
task.getResults(solution)

// BEST
// function solution(s){
//    return (s+"_").match(/.{2}/g)||[]
// }