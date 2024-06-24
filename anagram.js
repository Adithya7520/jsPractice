 function anagram(str1,str2){  
    let a = str1.split("").sort().join("")
     let b = str2.split("").sort().join("")    
          return a == b }
       let name1 = "adi"
        let name2 = "ida"
console.log(anagram(name1,name2))
