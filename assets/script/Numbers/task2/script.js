// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    let hours = Math.trunc(seconds / 3600)
    let minutes = Math.trunc((seconds - hours * 3600) / 60)
    seconds = seconds - minutes * 60 - hours * 3600
    return `${hours <= 9 ? '0' + hours : hours}:${minutes <= 9 ? '0' + minutes : minutes}:${seconds <= 9 ? '0' + seconds : seconds}`
}

console.log(humanReadable(45296));

task = {
    description: `Write a function, which takes a non-negative integer (seconds) 
    as input and returns the time in a human-readable format (HH:MM:SS) <br>

    <br>     HH = hours, padded to 2 digits, range: 00 - 99
    <br>     MM = minutes, padded to 2 digits, range: 00 - 59
    <br>     SS = seconds, padded to 2 digits, range: 00 - 59

    <br><br> The maximum time never exceeds 359999 (99:59:59)`,
    tests: [
        359999, 43243, 0, 15, 61, 7777 
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}

task.getResults(humanReadable)

// BEST
// function humanReadable(seconds) {
//   var pad = function(x) { return (x < 10) ? "0"+x : x; }
//   return pad(parseInt(seconds / (60*60))) + ":" +
//          pad(parseInt(seconds / 60 % 60)) + ":" +
//          pad(seconds % 60)
// }