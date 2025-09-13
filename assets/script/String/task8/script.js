function topThreeWords(text) {
    text = text
        .replaceAll(" ' ",'')
        .trim()
        .replaceAll(',', '')
        .replaceAll('  ',' ')
        .replaceAll('  ',' ')
        .replaceAll('.','')
        .replaceAll('#','')
        .trim()
        .replaceAll('/','')
        .replaceAll('\\','')
        .toLowerCase().split(' ')
    console.log(text);
    const words = new Map();
    text.forEach(element => {
        if (words.get(element)) {
            words.set(element, words.get(element) + 1)
        } else {
            words.set(element, 1)
        }
    });

    const resultArr = []
    for (let i = 0; i < 3; i++) {
        if (findMostFrequentlyWords(words,text)) {
            resultArr.push(findMostFrequentlyWords(words,text))
            words.delete(resultArr[i])
        } 
    }

    return resultArr
}

function findMostFrequentlyWords(words, text) {
    let maxKey = '', maxValue = 0;
    text.forEach(element => {
        if (words.get(element) > maxValue) {
            maxKey = element
            maxValue = words.get(element)
        }
    })

    return maxKey
}

task = {
    description: `Function that finds 3 most popular words in text.
    `,
    tests: [
        'Hello world!',
        'Say my name',
        `There are a number of traditions for weddings that have survived into the 21st century. It is still traditional for the bride and groom to have their own parties the night before getting married. The groom's party is called a 'Stag party', while the bride's is known as a 'Hen party'. On the morning of the wedding, the groom should not see the bride. If he does, this is bad luck. The bride puts on her special wedding dress, which is usually white. She also needs to wear 'something old, something new, something borrowed and something blue'. At the church, or registry office, the bride and groom exchange rings before walking together back down the aisle. When they get outside, the bride throws her bouquet in the air. Tradition says that whoever catches it will be the next person to get married.`,
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}

task.getResults(topThreeWords)