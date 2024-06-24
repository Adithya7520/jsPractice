// function vowels(name) {//     let str = name.split("");//     let vowelsCount = { a: 0, e: 0, i: 0, o: 0, u: 0 }; // Initialize an object to store vowel counts//     for (const char of str) {//         switch (char) {//             case 'a'://             case 'e'://             case 'i'://             case 'o'://             case 'u'://                 vowelsCount[char]++; // Increment the count for the respective vowel//                 break;//             default://                 break;//         }//     }//     return vowelsCount;// }
// let name = 'adithya upadhyaya';// console.log(vowels(name));
// let nums = [1,2,3,4,2,3,1,4];
// let counts = nums.reduce((acc,curr)=>{//     acc[curr] = (acc[curr] || 0) + curr//     return acc// },{})// console.log(counts)// function fibonacci(num){//     if(num <= 1 ){//         return 1;g//     } else {//         return fibonacci(num - 1) + fibonacci(num - 2);//     }ḥ// }F// let num = parseInt(prompt("Enter the number"));// console.log(fibonacci(num));
// let num = parseInt(prompt("Enter the number"));// console.log(fibonacci(num));// function fibonacci(num){//     let start = 0;//     let end = 1//     let result;//     for(let i = 0;i < num;i++){//         result = start + end;//         start= end//         end = result//     }//     return result// }
// function fact(n){//     if(n <=1)return 1//     else//     return n * fact(n-1);// }// console.log(fact(5))


let arr = ["121","123","141","155"];
const palincheck  = arr.map((ele)=>{    return ispalin(ele);})console.log(palincheck)

// Online Javascript Editor for free// Write, Edit and Run your Javascript code using JS Online Compilerfunction ispalin(str){    if(str === str.split("").reverse().join("")){a        return str    }else{     return false       }}
let arr = ["121","123","141","155"];
const palincheck  = arr.map((ele)=>{    return {        palin : ele,        sum : ispalin(ele) ?  ele.split("").reduce((acc,curr)=>acc + parseFloat(curr),0) : 0    };})console.log(palincheck)


<!DOCTYPE html><html><head>    <title>Clone Rule Div</title>    <script>        function submit() {            // Clone the rule div            const ruleDiv = document.querySelector('.rule');            const newRuleDiv = ruleDiv.cloneNode(true);                        // Append the cloned rule div to the parent element            const parentElement = document.querySelector('.rules-container');            parentElement.appendChild(newRuleDiv);        }    </script></head><body>    <div class="rules-container">        <div class="rule">            <p>This is rule 1</p>            <p>This is rule 2</p>            <p>This is rule 3</p>            <button onclick="submit()">Submit</button>        </div>    </div></body></html>

/ // Online Javascript Editor for free// // Write, Edit and Run your Javascript code using JS Online Compiler

// function checkPalin(str){//     if(str != ''){//         let str1 = str;//         let str2 = str.split("").reverse().join("");//         return str1 == str2//     }// }
// let str = "ammc";// console.log(checkPalin(str))////////////////////////////////////////////////////////////////////////////////////
// let arr = ['123','1232123212121','111111111111','4343421'];// let word = ""// for(let i= 0;i<arr.length;i++){//     let big = arr[i].length    //     for(let j = i + 1;j< arr.length;j++){//         if(arr[j].length > big){//             big = arr[j]//             word = arr[j]//         }//     }   // }// console.log(word)//////////////////////////////////////////////////////////////////////////////////////
// const fact = (num) =>{//     if(num == 0 || num == 1){//         return num//     }else{//         return num * fact(num - 1)//     }// }
// let num = 5;// console.log(fact(5))///////////////////////////////////////////////////////////////////////////////////
// let name = ['a','b','a','c','c','b']
// let newname = name.filter((ele,item,name)=> {//   return name.indexOf(ele) == item// })// console.log(newname)
///////////////////////////////////////////////////////////////////////////////
// let nestedarr= [//     [//         {"name":"123"}//         ],//         [//             {"roll":"456"}//             ]//     ]    //     console.log(nestedarr.flat())
////////////////////////////////////////////////////////////////////////////////
// let name = "adithya"// let newname = ""// name.split("").map((ele,index)=>{//     if(index == 0){//         newname += ele.toUpperCase()//     }else{//         newname += ele//     }// })// console.log(newname)/////////////////////////////////////////////////////////////////////
function randomNumber(num1,num2){    let range = 0;    for(let i = num1;i< num2; i++){        range = Math.random()    }        return range;}
console.log(randomNumber(1,10))





















