// You are going to be given a non-empty string. Your job is to return 
// the middle character(s) of the string.

//     If the string's length is odd, return the middle character.
//     If the string's length is even, return the middle 2 characters.

// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
    return s.length % 2 ? (s.slice((s.length / 2),(s.length / 2 + 1))) : (s.slice((s.length / 2 - 1),(s.length / 2 + 1)))
}

console.log(getMiddle('string'));

// BEST
// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }