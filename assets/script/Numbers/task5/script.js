// We need to sum big numbers and we require your help.

// Write a Function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// Example

// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

// Notes

//     The input numbers are big.
//     The input is a string of only digits
//     The numbers are positives

function add(array) {
    const a = array[0], b = array[1]
    const firstNum = a.split('').reverse()
    const secondNum = b.split('').reverse()
    const maxLength = firstNum.length > secondNum.length ? firstNum.length : secondNum.length
    const resultNum = []
    for (let i = 0; i < maxLength; i++){
        let currentDigit = Number(firstNum[i]) + Number(secondNum[i])
        if (currentDigit) {
            resultNum[i] = currentDigit
        } else {
            if (Number(firstNum[i])) {
                if (resultNum[i]) {
                    resultNum[i] += Number(firstNum[i])
                } else {
                    resultNum[i] = Number(firstNum[i])
                }
            } else {
                if (resultNum[i]) {
                    resultNum[i] += Number(secondNum[i])
                } else {
                    resultNum[i] = Number(secondNum[i])
                }
            }
        }
    }

    for (let i = 0; i < maxLength; i++) {
        if (resultNum[i] > 9) {
            if (resultNum[i+1]) {
                resultNum[i] -= 10
                resultNum[i+1] += 1
            } else {
                resultNum[i] -= 10
                resultNum[i+1] = 1
            }
        }
    }
    return resultNum.reverse().join('')
}

task = {
    description: `Function that returns the sum of two numbers. The input numbers 
    are strings and the function must return a string. <br> <br> 
    Notes: <br> <br>

    The input numbers are big. <br>
    The input is a string of only digits. <br>
    The numbers are positives.
    `,
    tests: [
        ['345', '2345'],['423412', '0'],
        ['4718964893231643764387243698274693', '6478326914873105387341043715'], 
        ['432894392874893729', '300']
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}
task.getResults(add)