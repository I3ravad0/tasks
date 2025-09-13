// Implement a function that receives two IPv4 addresses, 
// and returns the number of addresses between them (including 
// the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of 
// strings. The last address will always be greater than 
// the first one.

// Examples

// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(array){
    const start = array[0], end = array[1]
    const fisrtAdress = parseInt(start.split('.').reduce((accum, current) =>
        accum + createIPPart((+current).toString(2)) 
    ,0),2)
    const secondAdress = parseInt(end.split('.').reduce((accum, current) =>
        accum + createIPPart((+current).toString(2)) 
    ,0),2)
    return secondAdress - fisrtAdress
}

function createIPPart(str) {
    const length = str.length
    for (let i = 0; i < 8 - length; i++) {
        str = '0' + str
    }
    return str
}


task = {
    description: `Implement a function that receives two IPv4 addresses, 
        and returns the number of addresses between them (including 
        the first one, excluding the last one). <br>

        All inputs will be valid IPv4 addresses in the form of 
        strings. The last address will always be greater than 
        the first one. <br>
    `,
    tests: [
        ['150.0.0.0','150.0.0.1'],
        ['192.168.0.1', '192.168.0.180'],
        ['0.0.0.0','255.255.255.255'],
        ['192.0.0.0','192.0.1.0'],
        ['192.0.0.0','192.1.0.0']
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}
task.getResults(ipsBetween)

// BEST
// function ipsBetween(start, end){
//   const num = ip => ip.split('.')
//                       .map(x => parseInt(x))
//                       .reduce((acc, e) => acc * 256 + e);  
  
//   return num(end) - num(start);
// }

// GOOD
// function ipsBetween(start, end){
//   const ip1 = start.split('.')
//   const ip2 = end.split('.')
  
//   let result = 0
//   for (let i = 0; i < 4; i++) {
//     result += (ip2[i] - ip1[i]) * 256 ** (3 - i)
//   }
  
//   return result
// }