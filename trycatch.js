// Try to reverse string  using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's  on a new line.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    let num = 0;
    try{
        if(typeof(s)=="string"){
                num =  s.split("").reverse().join("");
                 console.log(num)
        }else{
            if(Number(s)){
                throw "s.split is not a function"
           
        }
     
        
       
        
        }
    
    }catch(message){
        console.log(message)
        console.log(s)
    }
    
    
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}