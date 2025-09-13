function checkNumberByLunaAlg(cardNumber) {
    const preparationArray = cardNumber.split(' ')
    const numbersArray = []
    preparationArray.forEach(item => {
        item.split('').forEach(elem => {
            numbersArray.push(elem)
        })
    });
    let summ = 0
    for (let i = 0; i < numbersArray.length; i++) {
        if (i % 2 === 0) {
            numbersArray[i] *= 2;
            if (numbersArray[i] > 9) {
                numbersArray[i] -= 9
            } 
        }
        summ += +numbersArray[i]
    }

    return summ % 10 == 0 ? 'Correct' : 'Incorrect' 
}

console.log(checkNumberByLunaAlg('4561 2612 1234 5467'));

task = {
    description: `Luna Algorithm that checks if card number is correct
    `,
    tests: [
        '4561 2612 1234 5467',
        '1234 5678 1234 5678',
        '0000 0000 0000 0000'
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}

task.getResults(checkNumberByLunaAlg)