// Make a program that Filters a list of strings and returns 
// a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it 
// has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []

// Input strings will only contain letters.
// Note: keep the original order of the names in the output.

function friend(friends){
    const arr = []
    friends.forEach(element => {
        if (element.split('').length == 4) {
            arr.push(element)
        }
    });
    return arr
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

task = {
    description: `Filters a list of strings and returns 
            a list with only your friends name in it. <br> <br>

            If a name has exactly 4 letters in it, you can be sure that it 
            has to be a friend of yours! Otherwise, you can be sure he's not..
    `,
    tests: [
        ["Ryan", "Kieran", "Jason", "Yous"],
        ["Peter", "Stephen", "Joe"],
        ['Alex', 'Karter']
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}
task.getResults(friend)

// BEST
// function friend(friends){
//   return friends.filter(n => n.length === 4)
// }