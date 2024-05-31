// Complete the function in the editor. It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

// : This value is equal to .
// : This value is equal to .
// : This value is equal to 
// : This value is equal to 
// Note: The names of the object's properties must be spelled correctly to pass this challenge.
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
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    
    let obj = 
    {
        length : a,
        width : b,
        perimeter : 2*(a+b),
        area : a*b
    }
    return obj;
}



function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}