function textAlign(text, n) {
    let resultString = ''
    const wordsArray = text.split(' ').reverse()
    let wordsCount = wordsArray.length
    
    while (wordsCount !== 0) {
        const currentRow = []
        let flag = true;
        while (flag) {
            try {
                if (wordsArray[wordsCount-1].length < n - getTotalLength(currentRow) - 1) {
                    currentRow.push(wordsArray.pop())
                    wordsCount -= 1
                } else {
                    flag = false;
                }
            } catch (error) {
                flag = false;
            }
        }
        resultString += `${justifyString(currentRow, n)}\n`
    }
    return resultString;
}

function justifyString(array, n) {
    const spacesCount = array.length - 1
    const totalLength = getTotalLength(array) - spacesCount
    const enoughSpace = n - totalLength
    const currentWordsCount = array.length
    let lastSpacesCount = enoughSpace % spacesCount
    let str = ''

    for (let i = 0; i < array.length - 1; i++) {
        str += array[i] + spaceGenerator(Math.floor(enoughSpace / spacesCount))
        if (lastSpacesCount > 0) {
            str += ' '
            lastSpacesCount--;
        }
    }
    str += array[array.length-1]

    return str
}

function spaceGenerator(number) {
    let str = ''
    for (let i = 0; i < number; i++) {
        str += ' '
    }
    return str
}

function getTotalLength(arrayOfWords) {
    let sum = 0;
    arrayOfWords.forEach(element => {
        sum += element.length
    });
    sum += arrayOfWords.length-1;
    return sum === -1 ? 0 : sum
}

console.log(textAlign('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.', 30));