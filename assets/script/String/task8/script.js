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

console.log(topThreeWords("  '  "));
console.log('  \'  '.trim().replaceAll(" ' ",'').split(''));