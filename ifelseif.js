// Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

// If the first character in string  is in the set , then return A.
// If the first character in string  is in the set , then return B.
// If the first character in string  is in the set , then return C.
// If the first character in string  is in the set , then return D.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    let alpha = s.charAt(0);
    let set1 = ["a",'e','i','u'];
     let set2 = ['b','c','d','f','g'];
      let set3 = ['h','j','k','l','m'];
  
      if (set1.includes(alpha)) {
        letter = "A";
    } else if (set2.includes(alpha)) {
        letter = "B";
    } else if (set3.includes(alpha)) {
        letter = "C";
    } else {
        letter = "D";
    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}