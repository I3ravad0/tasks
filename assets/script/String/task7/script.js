// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation 
// marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    let result = ''
    str.split(' ').forEach(element => {
        if (element == '!' || element == '?' || element == ',') {
            result += element + ' '
        } else {
            element = element.slice(1,element.length)+element.slice(0,1)
            result += element + 'ay '
        }
    });

    return result.slice(0,-1)
}

console.log(pigIt('Pig latin is cool'));

task = {
    description: `Move the first letter of each word to the end of it, 
        then add "ay" to the end of the word. Leave punctuation 
        marks untouched.
    `,
    tests: [
        'Hello World !',
        'Pig latin is cool',
        'My name is Piglin , so how are you?'
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}

task.getResults(pigIt)

// BEST
// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }