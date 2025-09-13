// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object 
// literal, {}.

function count(string) {
    const result = {};
    for (key of string.split('')) {
        key in result ? result[key]++ : result[key] = 1
    }
  return result;
}

task = {
    description: `The main idea is to count all the occurring characters in a string. <br>
    If you have a string like aba, then the result should be {'a': 2, 'b': 1}
    `,
    tests: [
        'aaaffbbb', 'Some big string, that has a lot of letters and chars'
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(objectDescriptor(func(test)))
        })
    },
    output: `N/A`
}

task.getResults(count)

function objectDescriptor(object) {
  let str = ''
  for (const [key, value] of Object.entries(object)) {
    str += `'${key}': ${value}, `
  }
  return str
}