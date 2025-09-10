// Write a function that when given a URL as a string, 
// parses out just the domain name and returns it as a 
// string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    if (url.indexOf('https://www.')+1) {
        let subStr = url.replace('https://www.','');
        console.log(subStr);
        return subStr.substring(0,subStr.indexOf('.'))
    } else if (url.indexOf('http://www.')+1) {
        let subStr = url.replace('http://www.','');
        return subStr.substring(0,subStr.indexOf('.'))
    } else if (url.indexOf('http://')+1) {
        return url.substring(7,url.indexOf('.'))
    } else if (url.indexOf('https://')+1) {
        return url.substring(8,url.indexOf('.'))
    } else   {
        let subStr = url.replace('www.','');
        return subStr.substring(0,subStr.indexOf('.'))
    }
}

console.log(domainName("https://www.wz14v.biz/archive/"));

// BEST
// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };