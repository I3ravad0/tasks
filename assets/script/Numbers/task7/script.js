function C(n, k) {
    return n>=k ? (factorial(n))/(factorial(k)*factorial(n-k)) : 0
}

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
}

function expand(formula) {
    const power = +formula.split('^')[1]
    if (power === 0) {
        return 1
    }
    const x = formula.split('^')[0].replace('(','').replace(')','').slice(formula.indexOf('+')-2,formula.indexOf('+')-1)
    const y = formula.split('^')[0].replace('(','').replace(')','').slice(-1)
    const coefX = +formula.slice(formula.indexOf('(')+1,formula.indexOf(x)) || 1
    const coefY = +formula.slice(formula.indexOf('+')+1,formula.indexOf(y)) || 1
    let resultString = ''

    for (let i = 0; i <= power; i++) {
        // console.log(`(${C(power,i)})*(${coefX}${x})^${power-i}*(${coefY}${y})^${i}`);
        resultString += C(power, i) * (coefX ** (power - i)) * (coefY ** i)
        resultString += (power-i) > 0 ? `${x}^${power-i}` : ''
        resultString += i > 0 ? `${y}^${i}` : ''
        resultString += (C(power, i + 1) * (coefX ** (power - i + 1)) * (coefY ** i + 1)) < 0 ? '' : ' + '
    }

    return resultString.split('').reverse().join('').replace('+','').split('').reverse().join('')
}

function getFormulaElements(formula) {
    const lowercaseAlphabetString = "abcdefghijklmnopqrstuvwxyz";
    const result = []
    result[4] = +formula.split('^')[1]
    let binom = formula.split('^')[0].replace('(','').replace(')','')
    if (binom.indexOf('+') !== -1) {
        binom = binom.split('+')
        if (+binom[0]) {
            result[0] = NaN
            result[1] = +binom[0]
        } else {
            result[0] = binom[0].slice(-1)
            result[1] = +binom[0].slice(0,-1)
        }
        if (+binom[1]) {
            result[2] = NaN
            result[3] = +binom[1]
        } else {
            result[2] = binom[1].slice(-1)
            result[3] = binom[1].slice(0,-1)
        }
    } else {
        if (binom[0] === '-') {
            binom = ['-' + binom.slice(1,binom.length).split('-')[0],'-' + binom.slice(1,binom.length).split('-')[1]]
            if (+binom[0] === NaN) {
            result[0] = NaN
            result[1] = +binom[0]
        } else {
            result[0] = binom[0].slice(-1)
            result[1] = +binom[0].slice(0,-1)
        }
        if (+binom[1] === NaN) {
            result[2] = NaN
            result[3] = +binom[1]
        } else {
            result[2] = binom[1].slice(-1)
            result[3] = binom[1].slice(0,-1)
        }
        } else {
            binom = [binom.split('-')[0],'-' + binom.split('-')[1]]
            if (+binom[0] === NaN) {
            result[0] = NaN
            result[1] = +binom[0]
        } else {
            result[0] = binom[0].slice(-1)
            result[1] = +binom[0].slice(0,-1)
        }
        if (+binom[1] === NaN) {
            result[2] = NaN
            result[3] = +binom[1]
        } else {
            result[2] = binom[1].slice(-1)
            result[3] = binom[1].slice(0,-1)
        }
        }
    }
    return result
}

function getBinomPart([x,y]) {
    const result = []

    return result
}

// console.log(getFormulaElements('(15x+36y)^7'));
// console.log(getFormulaElements('(15x-36y)^7'));
// console.log(getFormulaElements('(-15x+36y)^7'));
// console.log(getFormulaElements('(-15x-36y)^7'));
// console.log(getFormulaElements('(15+36y)^7'));
// console.log(getFormulaElements('(-15+36y)^7'));
// console.log(getFormulaElements('(15-36y)^7'));
// console.log(getFormulaElements('(15x+36)^7'));
// console.log(getFormulaElements('(-15x+36)^7'));
// console.log(getFormulaElements('(15x-36)^7'));

console.log(getFormulaElements("(x+1)^2"));
console.log(getFormulaElements("(p-1)^3"));
console.log(getFormulaElements("(2f+4)^6"));
console.log(getFormulaElements("(-2a-4)^0"));
console.log(getFormulaElements("(-12t+43)^2"));
console.log(getFormulaElements("(r+0)^203"));
console.log(getFormulaElements("(-x-1)^2"));

task = {
    description: `This function can find Newtow binom by coefficients
    `,
    tests: [
        "(x+1)^2",
        '(p-1)^3',
        "(2f+4)^6",
        "(-2a-4)^0",
        "(-12t+43)^2",
        "(r+0)^203",
        "(-x-1)^2"
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}
task.getResults(getFormulaElements)